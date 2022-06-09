import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Hero from './Hero';
import MyProject from './MyProject';
import Navbar from './Navbar';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <div className='lg:px-40'>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
            <Projects></Projects>
            <Skills></Skills>
            <MyProject></MyProject>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;