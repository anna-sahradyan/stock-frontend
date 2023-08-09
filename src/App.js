import React from 'react';
import "react-toastify/dist/ReactToastify.css";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import AddProduct from "./pages/addProduct/AddProduct ";
import Sidebar from "./components/sidebar/Sidebar";
import LogOut from "./pages/auth/LogOut";
import Forgot from "./pages/auth/Forgot";
import Auth from "./pages/auth/Auth";



const App = () => {

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/auth"} element={<Auth/>}/>
                <Route path={"/forgot"} element={<Forgot/>}/>
                <Route path={"/logout/:token"} element={<LogOut/>}/>
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