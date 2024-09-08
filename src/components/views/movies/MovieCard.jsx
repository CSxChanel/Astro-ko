import React from "react";
import { Link } from "react-router-dom";
import LazyLoadImageComponent from 'react-lazy-load-image-component';
const { LazyLoadImage } = LazyLoadImageComponent;
import 'react-lazy-load-image-component/src/effects/blur.css';


const MovieCard = ({ type, media }) => {
    return (
        <a href={`/${type}/${media.id}`} className="text-center">
            <LazyLoadImage
                alt={media.title}
                effect="blur"
                src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
                className="w-full h-[220px] md:h-[250px] lg:h-[300px] object-center object-cover rounded-2xl border-2 cursor-pointer shadow-lg"
            />
            <h3 className="text-sm md:text-base text-slate-900 dark:text-slate-100 text-ellipsis mb-1 sm:mb-2 line-clamp-1 cursor-pointer">
                {media.title}
            </h3>
            <p className="text-xs md:text-sm text-slate-600 dark:text-zinc-400">
                {media.release_date}
            </p>
            <p className="text-xs md:text-sm text-slate-600 dark:text-zinc-400">
                <span role="img" arial-lable="start">
                    ⭐&nbsp;
                </span>
                {media.vote_average}
            </p>
        </a>
    );
};

export default MovieCard;
