import React, {useState} from "react";
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";

function RegisterForm() {

    const [registerData, setRegisterData] = useState({ email: "", password: "", repeatPassword: ""});
    const [validation, setValidation] = useState({});

    const handleRegister = (event) => {
        const error = {};
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        event.preventDefault();

        if (!regex.test(registerData.email)) {
            error.email = 'Podany email jest nieprawidłowy!'
        }

        if (registerData.password.length < 6) {
            error.password = 'Podane hasło jest za krótkie!'
        }

        if (registerData.password !== registerData.repeatPassword) {
            error.repeatPassword = 'Hasła nie są takie same!'
        }

        if (!error.email && !error.password && !error.repeatPassword) {
            setRegisterData({email: "", password: "", repeatPassword: ""});
            setValidation({formValid: true});
        } else {
            setValidation(error);
        }

    }

    const handleForm = (event) => {
        let {name, value} = event.target;
        setRegisterData(prev => ({
            ...prev, [name]: value
        }))
    }



    return(
        <div className='account'>
            <div className='account_title'>
                Załóż konto
            </div>
            <img src={decoration} className='account_decoration' alt='fancy_decoration'/>
            <form className='account_form'>
                <div className='account_form_details'>
                    <label>
                        Email
                    </label>
                    <input
                        name={'email'}
                        value={registerData.email}
                        onChange={handleForm}
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
                        value={registerData.password}
                        onChange={handleForm}
                    />
                    {validation.password && <div className='error'>
                        {validation.password}
                    </div>}

                    <label>
                        Powtórz hasło
                    </label>
                    <input
                        type='password'
                        name={'repeatPassword'}
                        value={registerData.repeatPassword}
                        onChange={handleForm}
                    />
                    {validation.repeatPassword && <div className='error'>
                        {validation.repeatPassword}
                    </div>}

                </div>
                <div className='account_form_buttons'>
                    <Link to='/rejestracja'>
                        <button
                            className='create_account_btn btn'
                            onClick={handleRegister}
                        >
                            Załóż konto
                        </button>
                    </Link>

                    <Link to='/logowanie'>
                        <button className='log_in_btn btn'>
                            Zaloguj się
                        </button>
                    </Link>

                </div>


            </form>
        </div>
    )
}

export default RegisterForm;