import React from "react";
import { Link } from "react-router-dom";

import decoration from "../assets/Decoration.svg"
import icon_1 from "../assets/Icon-1.svg";
import icon_2 from "../assets/Icon-2.svg";
import icon_3 from  "../assets/Icon-3.svg";
import icon_4 from  "../assets/Icon-4.svg";


function FourSteps() {
    return(
        <>
            <div className='four_steps_title' id='steps'>
                <h2>
                    Wystarczą 4 proste kroki
                </h2>
                <img src={decoration} className='four_steps_decoration' alt='fancy_decoration'/>
            </div>

            <div className='four_steps_columns'>

                <div className='four_steps_step'>
                    <img src={icon_1} alt='icon1'/>
                    <p>
                        Wybierz rzeczy
                    </p>
                    <hr/>
                    <span>
                        ubrania, zabawki, sprzęt i inne
                    </span>
                </div>

                <div className='four_steps_step'>
                    <img src={icon_2} alt='icon2'/>
                    <p>
                        Spakuj je
                    </p>
                    <hr/>
                    <span>
                        skorzystaj z worków na śmieci
                    </span>
                </div>

                <div className='four_steps_step'>
                    <img src={icon_3} alt='icon3'/>
                    <p>
                        Zdecyduj komu chcesz pomóc
                    </p>
                    <hr/>
                    <span>
                        wybierz zaufane miejsce
                    </span>
                </div>

                <div className='four_steps_step'>
                    <img src={icon_4} alt='icon4'/>
                    <p>
                        Zamów kuriera
                    </p>
                    <hr/>
                    <span>
                        kurier przyjedzie w dogodnym terminie
                    </span>
                </div>
            </div>

            <div className='four_steps_btn'>
                <Link className='btn' to='/logowanie'>
                    Oddaj<br></br> rzeczy
                </Link>
            </div>
        </>


    )
}

export default FourSteps;