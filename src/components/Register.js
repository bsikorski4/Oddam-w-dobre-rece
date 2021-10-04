import React from "react";
import HomeHeader from "./HomeHeader";
import RegisterForm from "./RegisterForm";

function Register() {
    return(
        <>
            <HomeHeader/>
            <div className='create_account_form'>
                <RegisterForm/>
            </div>
        </>
    )
}

export default Register;