import React, {Component} from 'react';

import Header from '../../elements/header/header';
import FilmInfo from '../../elements/filmInfo/filmInfo'
import service from '../../service';
import '../home/home.css'
import PopularMovie from '../../elements/popularMovie/popularMovie';
import SearchBar from '../../elements/searchBar/searchBar';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {movie: [], popularMovies: []};

        this.service = new service();
        this.handleClick = this.handleClick.bind(this);
        this.takePopularMore = this.takePopularMore.bind(this);
    }
    handleClick(id) {
        this.takeMovie(id);
        window.scrollTo(0, 0);
    }
    takeMovie(id=682377) {
        this.service.getMovie(id)
            .then(
                (res) => {
                    this.setState({movie: res})
                }
            )
            .catch((error) => console.log('error', error));
    }
    takePopular() {
        this.service.getPopularMovie()
            .then(
                (res) => {
                    console.log(res);
                    this.setState({popularMovies: [...this.state.popularMovies, ...res]})
                    console.log(this.state.popularMovies[0]);
                }
            )
            .catch((error) => console.log('error', error));
    }
    takePopularMore() {
        let count = 1;
        count = this.state.popularMovies.length/20;
        this.service.getPopularMovie(count + 1)
            .then(
                (res) => {
                    this.setState({popularMovies: [...this.state.popularMovies, ...res]})
                }
            )
            .catch((error) => console.log('error', error));
    }

    componentDidMount() {
        this.takeMovie();
        this.takePopular();
    }
    render() {
        if (this.state.movie.length === 0 || this.state.popularMovies.length === 0) {
            return <div></div>
        }
        return (
            <>
                <Header/>
                <FilmInfo movie={this.state.movie}/>
                <SearchBar handleClick={this.handleClick}/>
                <PopularMovie takePopularMore={this.takePopularMore} handleClick={this.handleClick} popular={this.state.popularMovies}/>
            </>
        )
    } 
}
