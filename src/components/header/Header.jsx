import React from 'react';
import {useNavigate} from "react-router-dom";
import "./header.scss";
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../api";
import {SET_LOGIN} from "../../redux/features/auth/authSlice";


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logOut = async () => {
        await logoutUser();
        await dispatch(SET_LOGIN(false));
        navigate("/auth");
    };


    return (
        <>
            <div className={"layout"}>
                <section className={"nav-header"}>
                    <div className="logo">
                        <h2><span>Welcome:</span><span>Anna</span></h2>
                    </div>
                    <Button onClick={logOut} size="medium" variant="contained"> Logout
                    </Button>


                </section>
            </div>
        </>
    );
};

export default Header;
