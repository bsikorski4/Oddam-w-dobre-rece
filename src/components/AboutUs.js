import React from "react";
import decoration from "../assets/Decoration.svg";
import signature from "../assets/Signature.svg";

function AboutUs() {
    return(
        <div className='about_us' id='about'>
            <div className='about_us_left'>
                <h2>
                    O nas
                </h2>
                <img src={decoration} className='about_us_decoration' alt='fancy_decoration'/>
                <p>
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </p>
                <img src={signature} className='about_us_signature' alt='signature' />

            </div>

            <div className='about_us_right'>

            </div>

        </div>
    )
}

export default AboutUs