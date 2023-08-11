import React, {useState} from 'react';
import "./auth.scss";
import Loader from "../../components/Loading/Loader";
import {Button, Card} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {MdPassword} from "react-icons/md";

const Reset = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const login = (e) => {
        e.preventDefault();
    }
    const handleInputChange = () => {

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
                                <MdPassword size={35} color="#999" />

                            </div>
                            <h1>{"Reset Password"}</h1>

                            <form onSubmit={login} className={"form"}>

                                <input
                                    type="password"
                                    placeholder=" New Password"
                                    name="password"
                                    value={password}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="password"
                                    placeholder="Confirm  New Password"
                                    name="password2"
                                    value={password2}
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







