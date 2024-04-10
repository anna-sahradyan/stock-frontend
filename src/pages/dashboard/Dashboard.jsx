import React from 'react';
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import './dashboard.scss';

const Dashboard = () => {
    useRedirectLoggedOutUser("/auth");
    return (
        <>

        </>
    );
};

export default Dashboard;
