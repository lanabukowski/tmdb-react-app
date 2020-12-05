import React, {useState} from 'react';
import Service from '../../service';
import './searchBar.css';

const SearchBar = (props) => {
    const [searchRes, setSearchRes] = useState([]);
    const service = new Service();
    const handleInput = (value) => {
        if (value.length != 0) {
            service.getSearchMovie(value).then((data) => setSearchRes(data));
        } else {
            setSearchRes([]);
        }
    }
    const Container = () => {
        if (searchRes.length != 0) {
            return (
                <div className='search-res'>
                {searchRes.map((movie) => {
                    if (movie.title) {
                        return (
                            <div onClick={() => props.handleClick(movie.id)} className='search-film'><i class="fa fa-film" aria-hidden="true"></i>{movie.title}</div>
                        )
                    }
                })}
                </div>
            )
        }
    }
    return (
        <div className='search-wrapper'>
            <form className='search-wrap' id="form"> 
                <i class="fa fa-search fa-2x" aria-hidden="true"></i>
                <input onInput={(e) => handleInput(e.target.value)} className='search-str' type="search" id="query" name="q" placeholder="Search..."/>
            </form>
            {Container()} 
        </div>
    )
}

export default SearchBar;


{/* <div className='search-res'>
                <div className='search-film'><i class="fa fa-film" aria-hidden="true"></i>The SpongeBob Movie: Sponge on the Run</div>
                <div className='search-film'><i class="fa fa-film" aria-hidden="true"></i>The SpongeBob Movie: Sponge on the Run</div>
                <div className='search-film'><i class="fa fa-film" aria-hidden="true"></i>The SpongeBob Movie: Sponge on the Run</div>
            </div> */}


            