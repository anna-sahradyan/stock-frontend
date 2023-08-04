import React from 'react';
import "react-toastify/dist/ReactToastify.css";
import {Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";


const App = () => {

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
            </Routes>
        </>
    );
};

export default App;