import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import AddProduct from "./pages/addProduct/AddProduct ";
import Sidebar from "./components/sidebar/Sidebar";
import Reset from "./pages/auth/Reset";
import Forgot from "./pages/auth/Forgot";
import Auth from "./pages/auth/Auth";
import Dashboard from "./pages/dashboard/Dashboard";
import {ToastContainer} from "react-toastify";



const App = () => {

    return (
        <>
            <ToastContainer/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/auth"} element={<Auth/>}/>
                <Route path={"/forgot"} element={<Forgot/>}/>
                <Route path={"/reset/:token"} element={<Reset/>}/>
                <Route path="/add" element={<Sidebar><Layout><AddProduct/></Layout></Sidebar>}/>
                <Route path="/dashboard" element={<Sidebar><Layout><Dashboard/></Layout></Sidebar>}/>

            </Routes>

        </>
    );
};

export default App;