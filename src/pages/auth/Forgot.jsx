import React, {useState} from 'react';
import "./auth.scss";
import Loader from "../../components/Loading/Loader";
import {Button, Card} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";

import {AiOutlineMail} from "react-icons/ai";
import {toast} from "react-toastify";
import {forgotPassword, validateEmail} from "../../api/authService";

const Forgot = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const navigate = useNavigate();


    const login = async (e) => {
        e.preventDefault();
        if (!email) {
            return toast.error("Please enter an email");
        }

        if (!validateEmail(email)) {
            return toast.error("Please enter a valid email");
        }
        const userData = {
            email
        };
        await forgotPassword(userData);
        setEmail("");

    }

    return (
        <>
            <div className={"content"}>
                <img src={`/img/reg4.jpg`} alt={"bg"}
                     style={{width: "100%", height: "100vh", position: "absolute"}}
                />
                <div className="home"><Link to={"/"}><img src="/img/home.png" alt=""/></Link></div>

                <div className={`container`}>

                    {isLoading && <Loader/>}

                    <Card sx={{
                        minWidth: 500,
                        width: "50%",
                        height: "300px",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(90%, 30%)",

                    }}>
                        <div>
                            <div className="bi">
                                <AiOutlineMail size={35} color="#999"/>

                            </div>
                            <h1>{"Forgot Password"}</h1>
                            <form onSubmit={login} className={"form"}>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />


                                <Button type="submit" className="btnLogin" variant={"contained"}>
                                    Get Reset Password
                                </Button>
                                <Button className={"btnReg"} onClick={() => navigate("/auth")}>
                                    {"Sign In "}
                                </Button>

                            </form>

                        </div>

                    </Card>
                </div>
            </div>
        </>
    );
};

export default Forgot;

