import React, {useState} from 'react';
import './addProduct.scss';
import {useDispatch, useSelector} from "react-redux";
import {createProductAsyncThunk, selectIsLoading} from "../../redux/features/product/productSlice";
import Loader from "../../components/Loading/Loader";
import ProductForm from "./ProductForm";
import {useNavigate} from "react-router-dom";

const initialState = {
    name: '',
    category: '',
    price: '',
    quantity: '',
    file: '',
    content: ''
}

const AddProduct = () => {
    const [product, setProduct] = useState(initialState);
    const [productImage, setProductImage] = useState("");
    const [imagePrev, setImagePrev] = useState(null);
    const [description, setDescription] = useState("")
    const isLoading = useSelector(selectIsLoading);
    const {name, category, price, quantity, content, file} = product;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setProduct({...product, [name]: value})
    }
    const handleImageChange = (e) => {
        setProductImage(e.target.files[0]);
        setImagePrev(URL.createObjectURL(e.target.files[0]));
    }
    const genereteKSKU = (category) => {
        const letter = category.slice(0, 3).toUpperCase();
        const number = Date.now();
        const sku = letter + "-" + number
        return sku;
    }
    const saveProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name)
        formData.append("sku", genereteKSKU(category))
        formData.append("category", category)
        formData.append("quantity", quantity)
        formData.append("price", price)
        formData.append("description", description)
        formData.append("image", productImage)
        console.log(...formData);
        await dispatch(createProductAsyncThunk(formData));
        navigate('/dashboard')
    }
    return (
        <>
            <div className="addProduct">
                {isLoading && <Loader/>}
                <h1>Add New Product</h1>
                <ProductForm
                    product={product}
                    productImage={productImage}
                    imagePrev={imagePrev}
                    description={description}
                    setDescription={setDescription}
                    handleInputChange={handleInputChange}
                    handleImageChange={handleImageChange}
                    saveProduct={saveProduct}
                />
            </div>
        </>
    );
};

export default AddProduct;
