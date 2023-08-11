import React, {useState} from 'react';
import "./home.scss";
import {Link, useNavigate} from "react-router-dom";
// import Header from "../../components/header/Header";
import SectionHome from "./SectionHome";
import {RiProductHuntLine} from "react-icons/ri";
import {Button} from "@mui/material";

const Home = () => {
    const navigate = useNavigate();
    const [isSignup, setIsSignup] = useState(false);
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        navigate("/auth")
    }
    return (
        <>

            <div className="home">
                <div className={"container"}>
                    <section className={"nav"}>
                        <div className="logo">
                            <RiProductHuntLine size={33}/>
                        </div>
                        <Button onClick={switchMode} size="medium" variant="contained"> {isSignup ? "Sign Up" : "Sign In"}
                        </Button>


                    </section>
                </div>
                <SectionHome/>
            </div>
        </>
    );
};

export default Home;
