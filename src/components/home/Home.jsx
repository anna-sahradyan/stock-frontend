import React from 'react';
import "./home.scss";
import {Link} from "react-router-dom";
import SectionHome from "./SectionHome";
import {RiProductHuntLine} from "react-icons/ri";
import {Button} from "@mui/material";
import {useSelector} from "react-redux";
import {selectLoggedIn} from "../../redux/features/auth/authSlice";

const Home = () => {
    const isLoggedIn = useSelector(selectLoggedIn)
    return (
        <>

            <div className="home">
                <div className={"container"}>
                    <section className={"nav"}>
                        <div className="logo">
                            <RiProductHuntLine size={33}/>
                        </div>
                        <div className="btn_nav">
                            {!isLoggedIn ? <Link to="/auth"><Button size="medium"
                                                  variant="contained"> Sign in
                            </Button></Link> : null}
                            {isLoggedIn ? <Link to="/dashboard"><Button size="medium" variant="contained"
                                                                        style={{marginLeft: "10px"}}> Dashboard
                            </Button></Link> : null}

                        </div>
                    </section>
                </div>
                <SectionHome/>
            </div>
        </>
    );
};

export default Home;
