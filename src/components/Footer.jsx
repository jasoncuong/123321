import React from "react";
import "./Footer.css";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
    return (
        <div className="footer">
            <p>Copyright ⓒ {year}</p>
        </div>
    );
};

export default Footer;
