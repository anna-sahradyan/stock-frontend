import React from 'react';
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import "./home.scss";

const SectionHome = () => {
    return (
        <>
            <section className="container hero">
                <div className="hero-text">
                    <h2>Inventory {"&"} Stock Management Solution</h2>
                    <p>
                        Inventory system to control and manage proucts in the warehouse in
                        real timeand integrated to make it easier to develop your business.
                    </p>
                    <div className="hero-buttons">
                        <Button className="btn" variant={"contained"}>
                            <Link to="/dashboard">Free Trial 1 Month</Link>
                        </Button>
                    </div>
                    <div className="start">
                        <NumberText num="14K" text="Brand Owners"/>
                        <NumberText num="23K" text="Active Users"/>
                        <NumberText num="500+" text="Partners"/>
                    </div>
                </div>

                <div className="hero-image">
                    <img src={"/img/inv-img.png"} alt="Inventory"/>
                </div>
            </section>
        </>
    );
};
const NumberText = ({num, text}) => {
    return (
        <div className="numPart">
            <h3>{num}</h3>
            <p>{text}</p>
        </div>
    );
};
export default SectionHome;
