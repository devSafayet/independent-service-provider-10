import React from 'react';
import AboutInde from '../AboutInde/AboutInde';
import Services from '../Services/Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AboutInde></AboutInde>
            <Services></Services>

        </div>
    );
};

export default Home;