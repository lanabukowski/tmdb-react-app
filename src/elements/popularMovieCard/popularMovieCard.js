import React from 'react';
import {
    IMAGE_BASE_URL, 
    POSTED_SIZE 
} from '../../config';
import './popularMovieCard.css';

const PopularMovieCard = (props) => {
    const {movie} = props;
    // console.log(movie);
    return (
        <div onClick={()=>props.handleClick(movie.id)} className="card-wrap">
            <div className='card-image'><img src={`${IMAGE_BASE_URL}${POSTED_SIZE}${movie.poster_path}`}></img></div>
            <div className='card-info'>
                <div className='card-text'>
                    <p>{movie.vote_average}</p>
                    <p>{new Date(`${movie.release_date}`).toLocaleDateString('en-US')}</p>
                    <p>{movie.original_title}</p>
                   
                </div>
            </div>
        </div>
    )
}

export default PopularMovieCard;



