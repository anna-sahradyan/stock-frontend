import React, {useState} from 'react';
import "./sidebar.scss";
import {useNavigate} from "react-router-dom";
import {RiProductHuntLine} from "react-icons/ri";
import {HiMenuAlt3} from "react-icons/hi";
import SidebarItem from "./SidebarItem";
import menu from "../data/sidebar";

const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };
    return (
        <>
            <div className="layout">
                <div className="sidebar" style={{ width: isOpen ? "230px" : "60px" }}>
                    <div className="top_section">
                        <div className="logo" style={{ display: isOpen ? "block" : "none" }}>
                            <RiProductHuntLine
                                color={"#F9F6E5"}
                                size={35}
                                style={{ cursor: "pointer" }}
                                onClick={goHome}
                            />
                        </div>

                        <div
                            className="bars"
                            style={{ marginLeft: isOpen ? "120px" : "0px" }}>
                            <button></button>
                            <HiMenuAlt3   color={" #F9F6E5"} onClick={toggle} />
                        </div>
                    </div>
                    {menu.map((item, index) => {
                        return <SidebarItem key={index} item={item} isOpen={isOpen} />;
                    })}
                </div>

                <main
                    style={{
                        paddingLeft: isOpen ? "230px" : "60px",
                        transition: "all .5s",
                    }}>
                    {children}
                </main>
            </div>
        </>
    );
};

export default Sidebar;
