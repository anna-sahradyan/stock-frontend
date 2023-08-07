import React, {useState} from 'react';
import "./auth.scss";
import Loader from "../../components/Loading/Loader";
import {Button, Card} from "@mui/material";
import {Link} from "react-router-dom";
import {BiLogIn} from "react-icons/bi";

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const switchMode = () => {

    }
    const login = () => {

    }
    const handleInputChange = () => {

    }
    return (
        <> <div className={"content"}>
            <img src={`/img/reg2.jpg`} alt={"bg"} style={{width:"100%",height:"100vh",position:"absolute"}}
            />
            <div className={`container`} >

                {isLoading && <Loader/>}

                <Card sx={{   minWidth: 600,
                    width: "50%",
                    height: "400px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(60%, 30%)" }}>
                    <div>
                        <div className="bi">
                            <BiLogIn size={35} color="#999"/>
                        </div>
                        <h1>Login</h1>
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
                            <Button type="submit" className="btnLogin" variant={"contained"}>
                                Login
                            </Button>
          {/*                  <Link to="/forgot">Forgot Password</Link>*/}
          {/*                  <span className={"register"}>*/}
          {/*  <Link to="/">Home</Link>*/}
          {/*  <p> &nbsp; Don't have an account? &nbsp;</p>*/}
          {/*  <Link to="/register">Register</Link>*/}
          {/*</span>*/}
                            <Button onClick={switchMode} className={"btnReg"}>
                                {isLoading ? "Already have an account ? Sign In " : "Don't have an account ? Sign Up"}
                            </Button>
                        </form>

                    </div>

                </Card>
                </div>
            </div>
        </>
    );
};

export default Login;
