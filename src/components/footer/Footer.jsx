import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <>
            <div className="footer">
                <p>All Rights Reserved. &copy; {year}</p>
            </div>
        </>
    );
};

export default Footer;
