import React from 'react';
import {useNavigate} from "react-router-dom";
import "./header.scss";
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../api";
import {selectName, SET_LOGIN} from "../../redux/features/auth/authSlice";


const Header = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectName);
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
                        <h2><span>Welcome:</span><span style={{color:"#1976D2",fontSize:"20px",marginLeft:"10px",
                        }}>{name.toUpperCase()}</span></h2>
                    </div>
                    <Button onClick={logOut} size="medium" variant="contained"> Logout
                    </Button>


                </section>
            </div>
        </>
    );
};

export default Header;
