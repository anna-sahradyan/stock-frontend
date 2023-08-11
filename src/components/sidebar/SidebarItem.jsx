import React from 'react';
import "./sidebar.scss";

const SidebarItem = ({item}) => {
    return (
        <>
            <div>{item.title}</div>
        </>
    );
};

export default SidebarItem;
