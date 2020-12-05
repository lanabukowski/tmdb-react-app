import React, {Component} from 'react';

import {
    API_URL,
    API_KEY
} from './config';

export default class Service extends Component {
    
    getMovie = async (id) => {
        // const id = Math.floor(Math.random()*140 + 25);
        const response = await fetch(`${API_URL}movie/${id}?api_key=${API_KEY}`);
        if (!response.ok){
            throw new Error('Server Error');
        }
        const result = await response.json();
        return result;
    }
    getPopularMovie = async (count) => {
        const res = await fetch(`${API_URL}movie/popular?api_key=${API_KEY}&page=${count}`);
        if (!res.ok){
            throw new Error('Server Error');
        }
        const resultPopular = await res.json();
        return resultPopular.results;
    }
    getSearchMovie = async (value) => {
        const response = await fetch(`${API_URL}search/multi?api_key=${API_KEY}&query=${value}`);
        if (!response.ok){
            throw new Error('Server Error');
        }
        const result = await response.json();
        return result.results;
    }
}


