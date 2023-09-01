import React from 'react';
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";

const Dashboard = () => {
    useRedirectLoggedOutUser("/auth");
    return (
        <>
            <h1>hello dashboard</h1>
        </>
    );
};

export default Dashboard;
