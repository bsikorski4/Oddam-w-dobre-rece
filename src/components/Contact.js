import React, { useState }from "react";
import decoration from "../assets/Decoration.svg"
import Footer from "./Footer";

function Contact() {

    const [data, setData] = useState({name: "", email: "", message: ""});
    const [validation, setValidation] = useState({});

    const handleSubmit = event => {
        const error = {};
        const reEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const reName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;

        event.preventDefault();
        if (!reName.test(data.name)) {
            error.name = 'Podane imię jest nieprawidłowe!'
        }

        if (!reEmail.test(data.email)) {
            error.email = 'Podany email jest nieprawidłowy!'
        }

        if (data.message.length < 120) {
            error.message = 'Wiadomość musi mieć co najmniej 120 znaków'
        }

        if (!error.name && !error.email && !error.message) {
            sendForm(data)
        }

        else {
            setValidation(error)
        }
    }

    const sendForm = (form) => {
        fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(() => {
                setData({name: "", email: "", message: ""});
                setValidation({formValid: true})
            })

            .catch(error =>
                console.log(error));
    }

    const handleChangeForm = event => {
        let {name, value} = event.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }))

    }

    return(
        <section className='contact' id='contact'>
            <div className='contact_photo'/>
            <form className='contact_form'>
                <h2 className='contact_form_title'>
                    Skontaktuj się z nami
                </h2>
                <img src={decoration} className='contact_form_decoration' alt='fancy_decoration' />
                {validation.formValid &&
                <div className="contact_form_success">
                    Wiadomość została wysłana! <br></br>
                    Wkrótce się skontaktujemy.
                </div>}

                <div className='contact_form_details'>
                    <div className='contact_form_info'>
                        <div className='contact_form_input'>
                            <label className='contact_form_label'>
                                Wpisz swoje imię
                            </label>
                            <input

                                name='name'
                                placeholder='Krzysztof'
                                onChange={handleChangeForm}
                                value={data.name}/>
                            {validation.name &&
                            <div className='contact_form_error'>
                                {validation.name}
                            </div>}
                        </div>

                        <div className='contact_form_input'>

                            <label className='contact_form_label'>
                                Wpisz swój email
                            </label>
                            <input
                                   name='email'
                                   placeholder='abc@xyz.pl'
                                   value={data.email}
                                   onChange={handleChangeForm}/>
                            {validation.email &&
                            <div className='contact_form_error'>
                                {validation.email}
                            </div>}

                        </div>
                    </div>

                    <div className='contact_form_message contact_form_input'>
                        <label className='contact_form_label'>
                            Wpisz swoją wiadomość
                        </label>
                        <textarea
                            name='message'
                            value={data.message}
                            placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                            onChange={handleChangeForm}/>
                        {validation.message &&
                        <div className='contact_form_error'>
                            {validation.message}
                        </div>}
                    </div>

                </div>


                <button
                    className='contact_form_btn'
                    onClick={handleSubmit}
                >
                    Wyślij
                </button>
            </form>
            <div className='footer'>
                <Footer/>
            </div>
        </section>

    )
}

export default Contact;

