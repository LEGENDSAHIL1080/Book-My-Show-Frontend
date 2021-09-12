import React, {useState, useEffect} from "react";

import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";

//Config
//Temp
import PosterSlider, { Posterslider } from "../components/PosterSlider/PosterSlider.component";
import axios from "axios";


const HomePage = () => {
 const [popularMovies, setPopularMovies] = useState([]);
 const [topRated, setTopRated] = useState([]);
 const [upcomingMovies, setUpcomingMovies] = useState([]);

 useEffect(() => {
     const requestPopularMovies = async () => {
         const getPopularMovies = await axios.get("/movie/popular");
         setPopularMovies(getPopularMovies.data.results);
     };
     requestPopularMovies();
 }, []);

 useEffect(() => {
    const requestTopRated = async () => {
        const getTopRated = await axios.get("/movie/popular");
        setTopRated(getTopRated.data.results);
    };
    requestTopRated();
}, []);

useEffect(() => {
    const requestUpcomingMovies = async () => {
        const getUpcomingMovies = await axios.get("/movie/popular");
        setUpcomingMovies(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
}, []);


    return(
        <>
        <div className="flex flex-col gap-6">
        <div className="container mx-auto px-4">
            <h5 className="text-2xl text-gray-800 font-bold my-3">The Best Of Entertainment</h5>
       <EntertainmentCardSlider />
      
       </div>
       <div className="bg-bmshow-800 py-16 ">

           <div className="mx-auto px-4 flex flex-col gap-3"></div>
           <div>
<div>
    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" 
    alt="premiere/rupay"
    className="w-full h-full" />
</div>

           </div>
            <PosterSlider images={popularMovies}
            title="Premieres"
            subtitle="Brand New Releases Every Friday!"
            isDark
            />
       </div>
        </div>
        <div className=" container mx-auto px-4">
            <Posterslider  images={topRated}
            title="Online Streaming Events"
            subtitle="Brand New Releases Every Friday!"
            isDark={false}/>
        </div>
        <div className=" container mx-auto px-4">
            <Posterslider  images={upcomingMovies}
            title="Outdoor Events"
            isDark={false}/>
        </div>
         
        </>
    )
};



export default HomePage;