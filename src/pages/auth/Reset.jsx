import React, {useState} from 'react';
import "./auth.scss";
import Loader from "../../components/Loading/Loader";
import {Button, Card} from "@mui/material";
import {Link, useNavigate, useParams} from "react-router-dom";
import {MdPassword} from "react-icons/md";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";

const Reset = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {resetToken} = useParams();
    const [formData, setFormData] = useState({
        password:"",
        password2:""
    });

    const reset = (e) => {
        e.preventDefault();
        if (formData.password.length < 6) {
            return toast.error("Passwords must be up to 6 characters");
        }
    }
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    return (
        <>
            <div className={"content"}>
                <img src={`/img/esc.jpg`} alt={"bg"}
                     style={{width: "100%", height: "100vh", position: "absolute"}}
                />
                <div className="home"><Link to={"/"}><img src="/img/home.png" alt=""/></Link></div>

                <div className={`container`}>

                    {isLoading && <Loader/>}

                    <Card sx={{
                        minWidth: 500,
                        width: "50%",
                        height: "350px",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(15%, 30%)",

                    }}>
                        <div>
                            <div className="bi">
                                <MdPassword size={35} color="#999"/>

                            </div>
                            <h1>{"Reset Password"}</h1>

                            <form onSubmit={reset} className={"form"}>
                                <input
                                    type="password"
                                    placeholder=" New Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="password"
                                    placeholder="Confirm  New Password"
                                    name="password2"
                                    value={formData.password2}
                                    onChange={handleInputChange}
                                />

                                <Button type="submit" className="btnLogin" variant={"contained"}>
                                    Reset Password
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

export default Reset;







