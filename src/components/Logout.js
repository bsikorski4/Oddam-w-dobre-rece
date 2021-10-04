import React from "react";
import { Link } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import decoration from "../assets/Decoration.svg"

function Logout() {
    return(
        <>
            <HomeHeader/>
            <div className='logout'>
                <div className='logout_title'>
                    Wylogowanie nastąpiło<br></br> pomyślnie!
                </div>
                <img src={decoration} className='login_decoration' alt='fancy_decoration'/>
                <Link to='/'>
                    <button className='logout_btn'>
                        Strona główna
                    </button>
                </Link>
            </div>

        </>
    )
}

export default Logout