import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroll} from "react-scroll";


function HomeHeader() {
    return(
        <header>
            <nav className='main_nav'>
                <div className='main_nav_log'>
                    <Link className='main_nav_link' to='/logowanie'>
                        Zaloguj
                    </Link>
                    <Link className='main_nav_link' to='/rejestracja'>
                        Załóż konto
                    </Link>
                </div>

                <ul className='main_nav_page'>
                    <li>
                        <Scroll
                            activeClass="active"
                            to='start'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='main_nav-section'
                        >
                            <Link to='/'>
                                Start
                            </Link>
                        </Scroll>
                    </li>

                    <li>
                        <Scroll
                            activeClass="active"
                            to='steps'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='main_nav-section'
                        >
                            O co chodzi?
                        </Scroll>
                    </li>

                    <li>
                        <Scroll
                            activeClass="active"
                            to='about'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='main_nav-section'
                        >
                            O nas
                        </Scroll>
                    </li>

                    <li>
                        <Scroll
                            activeClass="active"
                            to='foundations'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='main_nav-section'
                        >
                            Fundacje i organizacje
                        </Scroll>
                    </li>

                    <li>
                        <Scroll
                            activeClass="active"
                            to='contact'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='main_nav-section'
                        >
                            Kontakt
                        </Scroll>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default HomeHeader;
