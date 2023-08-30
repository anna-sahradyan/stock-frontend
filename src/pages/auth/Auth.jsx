import React, {useEffect, useState} from 'react';
import "./auth.scss";
import Loader from "../../components/Loading/Loader";
import {Button, Card} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {BiLogIn} from "react-icons/bi";
import {TiUserAddOutline} from "react-icons/ti";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {loginUser, registerUser, validateEmail} from "../../api";
import {SET_LOGIN, SET_NAME} from "../../redux/features/auth/authSlice";


const Auth = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    });
    const {name, email, password, password2} = formData;
    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);

    }
    const switchModeForgot = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        navigate("/forgot");
    }
    const login = async (e) => {
        e.preventDefault();
        if(isSignUp){
            if (!name || !email || !password) {
                return toast.error("All fields are required");
            }
            if (password.length < 6) {
                return toast.error("Passwords must be up to 6 characters");
            }
            if (!validateEmail(email)) {
                return toast.error("Please enter a valid email");
            }
            if (password !== password2) {
                return toast.error("Passwords do not match");
            }
            const userData = {
                name,
                email,
                password,
            };
            setIsLoading(true);
            try {
                const data = await registerUser(userData);
                if (data) {
                    await dispatch(SET_LOGIN(true));
                    await dispatch(SET_NAME(data.name));
                    navigate("/dashboard");
                    setIsLoading(false)
                }
            } catch (error) {
                setIsLoading(false);
            }

        }
        if (!email || !password) {
            return toast.error("All fields are required");
        }

        if (!validateEmail(email)) {
            return toast.error("Please enter a valid email");
        }

        const userData = {
            email,
            password,
        };
        setIsLoading(true);
        try {
            const data = await loginUser(userData);
            console.log(data);
            await dispatch(SET_LOGIN(true));
            await dispatch(SET_NAME(data.name));
            navigate("/dashboard");
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }

    }
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    return (
        <>
            <div className={"content"}>
                <img src={`/img/reg2.jpg`} alt={"bg"}
                     style={{width: "100%", height: "100vh", position: "absolute", opacity: "0.6"}}
                />
                <div className="home"><Link to={"/"}><img src="/img/home.png" alt=""/></Link></div>
                <div className={`container`}>

                    {isLoading && <Loader/>}

                    <Card sx={{
                        minWidth: 600,
                        width: "50%",
                        height: "450px",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(60%, 20%)"
                    }}>
                        <div>
                            <div className="bi">
                                {isSignUp ? <TiUserAddOutline size={35} color="#999"/> :
                                    <BiLogIn size={35} color="#999"/>}

                            </div>
                            <h1>{isSignUp ? "Sign Up" : "Sign In"}</h1>
                            <form onSubmit={login} className={"form"}>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={email}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={handleInputChange}
                                />

                                {isSignUp && (
                                    <>

                                        <input
                                            type="password"
                                            placeholder="Confirm Password"
                                            name="password2"
                                            value={password2}
                                            onChange={handleInputChange}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            value={name}
                                            onChange={handleInputChange}
                                        />

                                    </>
                                )}
                                <Button type="submit" className="btnLogin" variant={"contained"}>
                                    Submit
                                </Button>
                                <Button onClick={switchMode} className={"btnReg"}>
                                    {isSignUp ? "Already have an account ? Sign In " : "Don't have an account ? Sign Up"}
                                </Button>
                                <Button onClick={switchModeForgot} className={"btnReg"}>
                                    {isSignUp ? "Don't have an account ? Sign Up" : "Forgot Password ? Forgot Password "}

                                </Button>

                            </form>

                        </div>

                    </Card>
                </div>
            </div>
        </>
    );
};

export default Auth;;
