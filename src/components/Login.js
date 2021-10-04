import React from "react";
import HomeHeader from "./HomeHeader";
import LoginForm from "./LoginForm";

function Login() {
    return(
        <>
            <HomeHeader/>
            <div className='login_form'>
                <LoginForm/>
            </div>
        </>
    )
}

export default Login;