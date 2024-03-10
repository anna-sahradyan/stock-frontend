import React from 'react';
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";


const Dashboard = () => {
    useRedirectLoggedOutUser("/auth");
    return (
        <>

        </>
    );
};

export default Dashboard;
