import React from 'react';
import { useNavigate} from "react-router-dom";
import "./header.scss";
import {Button} from "@mui/material";


const Header = () => {
    const navigate = useNavigate();
    const logout= () => {
        navigate("/auth")
    }
    return (
        <>
            <div className={"layout"}>
                <section className={"nav-header"}>
                    <div className="logo">
                       <h2><span>Welcome:</span><span>Anna</span></h2>
                    </div>
                    <Button onClick={logout} size="medium" variant="contained"> Logout
                    </Button>


                </section>
            </div>
        </>
    );
};

export default Header;
