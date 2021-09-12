import React, {useState, useEffect} from "react";
import HeroSlider from "react-slick";
import axios from "axios";



//Import Component
import { NextArrow , PrevArrow} from "./Arrows.components"

const HeroCarousel = () => {


    const [images, setImages] = useState([]);

    useEffect(() => {
        const requestNowPlayingMovies = async () => {
            const getImages = await axios.get("/tv/popular");
            setImages(getImages.data.results);
        };
        requestNowPlayingMovies();

    }, []);

const settingsLG = {
    arrows: true,
    centerMode: true,
    centerPadding: "300px",
    slidesToShow:1,
    autoplay: true,
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

 const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  

return (
<>
<div className="lg:hidden ">
    <HeroSlider {...settings}>
    {images.map((image) =>
    (
<div className="w-full h-80 md:h-64  px-3 py-3 ">
    <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="Image Not Found" className="w-full h-full focus:outline-none rounded-md" />
</div>
   ))} 
</HeroSlider>
</div>

<div className="hidden lg:block ">
<HeroSlider {...settingsLG}>
    {images.map((image) =>
    (
<div className="w-full h-96 px-2 py-3 focus:outline-none">
    <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="Image Not Found" className="w-full h-full rounded-md " />
</div>
   ))}
    

</HeroSlider>
</div>
</>
);
};




export default HeroCarousel;