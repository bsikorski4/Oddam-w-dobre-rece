import React from "react";

import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg"

function Footer() {
    return(
        <footer className='footer_container'>
            <p className='footer_copyright'>
                Copyright by Coders Lab
            </p>
            <div className='footer_social_media'>
                <a href='https://facebook.com'><img src={facebook} className='facebook' alt='facebook'/></a>
                <a href='https://instagram.com'><img src={instagram} className='instagram' alt='instagram'/></a>

            </div>
        </footer>
    )
}

export default Footer;