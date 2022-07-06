import React from 'react';
import AboutInde from '../AboutInde/AboutInde';
import Services from '../Services/Services/Services';
import Slider from '../Slider/Slider';
import Contact from '../Contacts/Contact';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AboutInde></AboutInde>
            <Services></Services>
            <Contact />
        </div>
    );
};

export default Home;