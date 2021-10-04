import React from 'react';

import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";
import ThreeColumns from "./ThreeColumns";
import FourSteps from "./FourSteps";
import AboutUs from "./AboutUs";
import WhoWeHelp from "./WhoWeHelp";
import Contact from "./Contact";



function Home() {
    return(
        <>
            <HomeHeader/>
            <HomeMain/>
            <ThreeColumns/>
            <FourSteps/>
            <AboutUs/>
            <WhoWeHelp/>
            <Contact/>
        </>

    );
}

export default Home;
