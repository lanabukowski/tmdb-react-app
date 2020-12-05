import React from 'react';
import '../header/header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='react-block'><img className='react' src='images/react.png' ></img></div>
            <div className='tmbd-block'><img className='tmbd' src='images/tmbd.png'></img></div>
        </div>
    )}

export default Header;