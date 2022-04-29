import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/dr slider images/img1.jpg';
import img2 from '../../../images/dr slider images/img2.jpg';
import img3 from '../../../images/dr slider images/img3.jpg';



const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 caruImg"
                        src={img2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 className='text-primary'>Wellcome to Dr. Kaneez Fatema Page</h2>
                        <h4 className='text-warning'>Your Health and Happiness is our main Goal. </h4>
                        <p className='text-primary'>Always Caring. Always Here.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 caruImg"
                        src={img3}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2 className='text-primary'>Wellcome to Dr. Kaneez Fatema Page</h2>
                        <h4 className='text-warning'>Your Health and Happiness is our main Goal. </h4>
                        <p className='text-primary'>Always Caring. Always Here.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 caruImg"
                        src={img1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2 className='text-primary'>Wellcome to Dr. Kaneez Fatema Page</h2>
                        <h4 className='text-warning'>Your Health and Happiness is our main Goal. </h4>
                        <p className='text-primary'>Always Caring. Always Here.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;