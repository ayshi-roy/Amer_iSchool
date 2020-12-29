import React from 'react';
import Navbar from '../Navbar/Navbar';
import Slider from './Slider';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Slider></Slider>
            </div>
        </div>

    );
};

export default Header;