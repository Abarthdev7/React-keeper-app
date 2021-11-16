import React from "react";

function getDate() {
    let date = new Date().getFullYear()
    return date
}

function Footer() {
    return (
        <div className='footer'>
            <h2 className='footer-text'>Copyright {getDate()}</h2>

        </div>
    )
}

export default Footer;
