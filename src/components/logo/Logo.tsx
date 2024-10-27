import React from 'react';
import logo from '../../logo.svg';

export const Logo = () => {
    return (
        <a>
            <svg width="50px" height="50px" viewBox="0 0 64 64" version="1.1"  xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${logo}#_x33_6-Laptop`}></use>
            </svg>
        </a>
    );
};