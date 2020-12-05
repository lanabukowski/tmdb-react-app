import React, { useRef, useEffect } from 'react';
import PopularMovieCard from '../popularMovieCard/popularMovieCard';
import './popularMovie.css';

const PopularMovie = (props) => {
//    const scrollRef = useRef(window.pageYOffset);
//    scrollRef.current = window.pageYOffset;
   const scrollPosition = window.pageYOffset;
   useEffect(() => {
      window.scrollTo(0, scrollPosition)
   });
    return (
        <div>
            <h3 className='popular-title'>Popular Movie</h3>
            <div className='popular-wrapper'>
            {props.popular.map((movie) => {
                return (
                    <PopularMovieCard movie={movie} handleClick={props.handleClick}></PopularMovieCard>
                    )
                })
            }
            </div>
            <button onClick={() => props.takePopularMore()} className='popular-btn'>See more</button>
        </div>
    ) 
}

export default PopularMovie;

