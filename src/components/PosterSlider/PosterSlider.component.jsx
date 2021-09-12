import React from 'react';
import Slider from 'react-slick';
//Components
import Poster from '../Poster/Poster.component';


//Configs
import PosterCarousalSettings from '../../config/PosterCarousal.config';

export const Posterslider = (props) => {
const sliderConfig = props.config ? props.config : PosterCarousalSettings;



    return (
<>
<div className=" mx-5">
            <h3 className={` text-xl font-bold ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.title}</h3>
            <p className={` text-xl font-bold ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.subtitle}</p>
        </div>
    <Slider {...sliderConfig}>
        {props.images.map((image) =>(
        <Poster {...image} isDark={props.isDark} />
        ))}
    </Slider>
</>
    );
};
export default Posterslider;    