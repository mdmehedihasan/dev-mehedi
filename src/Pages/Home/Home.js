import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Projects from './Projects';
import Skills from './Skills';
import SocialLinks from './SocialLinks';

const Home = () => {
    return (
        <div className='lg:px-20'>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
            <Projects></Projects>
            <Skills></Skills>
            <Contact></Contact>
            <SocialLinks></SocialLinks>
            <Footer></Footer>
        </div>
    );
};

export default Home;