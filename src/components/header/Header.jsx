import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./header.scss";
import {Button} from "@mui/material";
import { RiProductHuntLine } from "react-icons/ri";
const Header = () => {
    const [isSignup, setIsSignup] = useState(false);
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);

    }
    return (
        <>
            <div className={"container"}>
                <section className={"nav"}>
                    <div className="logo">
                        <RiProductHuntLine size={33} />
                    </div>
                    <Button  onClick={switchMode} size="medium" variant="contained"> {isSignup ? "Sign Up" : "Sign In"}
                    </Button>


                </section>
            </div>
        </>
    );
};

export default Header;
