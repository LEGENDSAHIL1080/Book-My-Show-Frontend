import React from "react";

//Components
import Navbar from "../components/Navbar/navbar.component";
 import HeroCarousel from "../components/HeroCarousel/HeroCarsousel.component";

const DefaultLayout = (props) => {
    return (
        <>
        <Navbar/>
        <HeroCarousel />
        
        {props.children}
        </>
        );
};
export default DefaultLayout;