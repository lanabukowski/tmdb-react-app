import React from 'react';
import styled from 'styled-components';
import './filmInfo.css';
import {
    IMAGE_BASE_URL, 
    BACKROP_SIZE,
    POSTED_SIZE 
} from '../../config';
import { convertMoney, calcTime } from '../../helpers';

const StyledBackground = styled.div`
    background-image: ${props => `url(${IMAGE_BASE_URL}${BACKROP_SIZE}${props.image})`};
    background-repeat: no-repeat;
    background-size: cover;
`;

const FilmInfo = (props) => {
    const {movie} = props;
    return (
        <StyledBackground image={movie.backdrop_path} className='bg-color'>
            <div className='info-wrap'>
                <div className='info-poster'><img src={`${IMAGE_BASE_URL}${POSTED_SIZE}${movie.poster_path}`}></img></div>
                <div className='info-text'>
                    <div className='about'>
                        <h1>{movie.title}</h1>
                        <h3>{movie.tagline}</h3>
                        <p>{movie.overview}</p>
                    </div>
                    <div className='nummeral'>
                        <div className='left'>
                            <div className='time'>
                                <h4>Running time:</h4>
                                <p>{calcTime(movie.runtime)}</p>
                            </div>
                            <div className='budget'>
                                <h4>Budget:</h4>
                                <p>{convertMoney(movie.budget)}</p>
                            </div>
                        </div>
                        <div className='right'>
                            <div className='genres'>
                                <h4>Genres:</h4>
                                <p>{movie.genres.map(genre => genre.name).join(', n')}</p>
                            </div>
                            <div className='average'>
                                <h4>Average:</h4>
                                <p>{movie.vote_average}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledBackground>
    )
        
}

export default FilmInfo;

// style={{ backgroundImage: `url(${IMAGE_BASE_URL}${BACKROP_SIZE}${movie.backdrop_path})`}}