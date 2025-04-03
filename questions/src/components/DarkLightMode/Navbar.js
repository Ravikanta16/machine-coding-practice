import React from 'react';
import {Link} from 'react-router-dom';
import { useTheme } from './ThemeContext';

const Navbar = () => {
    const {theme,toggleTheme}=useTheme();
    return (
        <nav className='mynav'>
            <div className='navbar'>
                <Link to ="/">Home</Link>
                <Link to ="/about">About</Link>
            </div>
            <div>
                <button className='btn' onClick={toggleTheme}>{theme}</button>
            </div>
        </nav>  
    );
};

export default Navbar;