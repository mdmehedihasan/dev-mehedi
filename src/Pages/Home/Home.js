import React from 'react';
import About from './About';
import Hero from './Hero';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div className='lg:px-40'>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>

        </div>
    );
};

export default Home;