import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import ThemeContext from './ThemeContext';

const ThemeMode =()=>{
    return(
    <ThemeContext>
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    </BrowserRouter>
    </ThemeContext>
    );
}
export default ThemeMode;
