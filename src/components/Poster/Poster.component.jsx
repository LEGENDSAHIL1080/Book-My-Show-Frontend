import React from 'react';
import { Link } from 'react-router-dom';


export const Poster  = (props) => {
    return (
    <Link to={`/movie/${props.id}`}>
        <div className="flex flex-col items-start gap-2 px-1" >
            <div className="h-40 md:h-80" >
                <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.original_title} className="w-full h-full rounded-md" />
            </div>
            <h3 className={`text-2xl font-bold ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.title}</h3>
            <p className={`text-sm  ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.subtitle}</p>
            
        </div>
        </Link>
    );
};

export default Poster; 
