import React, { useState }from "react";
import { Link } from "react-router-dom";
import decoration from "../assets/Decoration.svg"



function LoginForm() {

    const [loginData, setLoginData] = useState({ email: "", password: ""});
    const [validation, setValidation] = useState({});

    const handleLogin = (event) => {
        const error = {};
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        event.preventDefault();

        if (!regex.test(loginData.email)) {
            error.email = 'Podany email jest nieprawidłowy!'
        }

        if (loginData.password.length < 6) {
            error.password = 'Podane hasło jest za krótkie!'
        }

        if (!error.email && !error.password) {
            setLoginData({email: "", password: ""});
            setValidation({formValid: true});
        } else {
            setValidation(error);
        }

    }

    const handleChange = (event) => {
        let {name, value} = event.target;
        setLoginData(prev => ({
            ...prev, [name]: value
        }))
    }


    return(
        <div className='login'>
            <div className='login_title'>
                Zaloguj się
            </div>
            <img src={decoration} className='login_decoration' alt='fancy_decoration'/>
            <form className='login_form'>
                <div className='login_form_details'>
                    <label>Email

                    </label>
                    <input
                        name={'email'}
                        value={loginData.email}
                        onChange={handleChange}
                    />
                    {validation.email && <div className='error'>
                        {validation.email}
                    </div>}

                    <label>
                        Hasło
                    </label>
                    <input
                        type='password'
                        name={'password'}
                        value={loginData.password}
                        onChange={handleChange}
                    />
                    {validation.password && <div className='error'>
                        {validation.password}
                    </div>}

                </div>
                <div className='login_form_buttons'>

                    <Link to='/rejestracja'>
                        <button className='log_in_btn btn'>
                            Załóż konto
                        </button>
                    </Link>

                    <Link to='/logowanie'>
                        <button
                            className='create_account_btn btn'
                            onClick={handleLogin}
                        >
                            Zaloguj się
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;