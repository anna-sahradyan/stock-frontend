import React from 'react';
import "react-toastify/dist/ReactToastify.css";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Layout from "./components/layout/Layout";
import AddProduct from "./pages/addProduct/AddProduct ";
import Sidebar from "./components/sidebar/Sidebar";


const App = () => {

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/register"} element={<Register/>}/>
                <Route
                    path="/add-product"
                    element={
                        <Sidebar>
                            <Layout>
                                <AddProduct />
                            </Layout>
                        </Sidebar>
                    }
                />
            </Routes>
        </>
    );
};

export default App;