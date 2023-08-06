import React from 'react';
import "./home.scss";
import {Link} from "react-router-dom";
import Header from "../../components/header/Header";
import SectionHome from "./SectionHome";

const Home = () => {
    return (
        <>

            <Header/>
            <div className="home">
                <SectionHome/>
            </div>
        </>
    );
};

export default Home;
