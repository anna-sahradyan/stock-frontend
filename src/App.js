import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import AddProduct from "./pages/addProduct/AddProduct ";
import Sidebar from "./components/sidebar/Sidebar";
import Reset from "./pages/auth/Reset";
import Forgot from "./pages/auth/Forgot";
import Auth from "./pages/auth/Auth";
import Dashboard from "./pages/dashboard/Dashboard";
import {ToastContainer} from "react-toastify";
import axios from "axios";
import {useDispatch} from "react-redux";
import {getLoginStatus} from "./api/authService";
import {SET_LOGIN} from "./redux/features/auth/authSlice";

axios.defaults.withCredentials = true;


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        async function loginStatus() {
            const status = await getLoginStatus();
            dispatch(SET_LOGIN(status));
        }
        loginStatus();
    }, [dispatch]);

    return (
        <>
            <ToastContainer/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/auth"} element={<Auth/>}/>
                <Route path={"/forgot"} element={<Forgot/>}/>
                <Route path={"/resetpassword/:resetToken"} element={<Reset/>}/>
                <Route path="/add" element={<Sidebar><Layout><AddProduct/></Layout></Sidebar>}/>
                <Route path="/dashboard" element={<Sidebar><Layout><Dashboard/></Layout></Sidebar>}/>

            </Routes>

        </>
    );
};

export default App;