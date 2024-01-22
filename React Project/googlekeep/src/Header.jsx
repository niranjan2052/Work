import React from 'react';
import logo from './logo.svg';

import './App.css'

const Header = () => {
    return(
        <>
        <div className='header'>
            <img src={logo} alt="logo"/>
            <span className='title'>NOTES KEEP</span>
        </div>
        </>
    );
};

export default Header;