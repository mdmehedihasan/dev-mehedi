import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div className='lg:px-40'>
            <Navbar></Navbar>
            <Hero></Hero>

        </div>
    );
};

export default Home;