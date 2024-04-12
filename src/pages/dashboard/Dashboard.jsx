import React, {useEffect} from 'react';
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import './dashboard.scss';
import ProductList from "../productList/ProductList";
import ProductInfo from "../productInfo/ProductInfo";
import {useDispatch, useSelector} from "react-redux";
import {getAllProductAsyncThunk} from "../../redux/features/product/productSlice";
import {toast} from "react-toastify";
import {selectLoggedIn} from "../../redux/features/auth/authSlice";

const Dashboard = () => {
    useRedirectLoggedOutUser("/auth");
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectLoggedIn);
    const {products, isError, isLoading, message} = useSelector((state) => state.product);
    useEffect(() => {
        if (isLoggedIn){
            dispatch(getAllProductAsyncThunk());
        }

    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
    }, [isError, message]);
    return (
        <>
            <div className="wrapper">
                <ProductInfo/>
                <ProductList/>
            </div>
        </>
    );
};

export default Dashboard;
