import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll"
import decoration from "../assets/Decoration.svg"

function HomeMain() {
    return(
        <section className='main_content' id='start'>
            <div className='main_content_hero'>
            </div>

            <div className='main_content-container'>
                <div className='main_content_right'>

                    <h1 className='main_content_title'>
                        Zacznij pomagać! <br/>Oddaj niechciane rzeczy w zaufane ręce
                    </h1>

                    <img src={decoration} className='main_content_decoration' alt='fancy_decoration'/>

                    <div>
                        <Link to='/logowanie' className='big_btn'>
                            Oddaj<br></br>rzeczy
                        </Link>

                        <Link to='/logowanie' className='big_btn'>
                            Zorganizuj zbiórkę
                        </Link>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default HomeMain;