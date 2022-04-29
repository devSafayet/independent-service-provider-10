import React from 'react';
import img from '../../../images/dr kaneez.jpg';
import './AboutInde.css';
const AboutInde = () => {
    return (
        <div className='container about-bg'>
            <h3 className='mt-5 pt-3 text-center appoint'>This is Dr. Kaneez Fatema. </h3>
            <div className='d-md-flex'>
                <div className='me-md-3 images'>
                    <img className='mt-md-5 text-center img' src={img} alt="" />
                </div>
                <div className='mt-md-5  doctorcontainer'>
                    <h2 className='text-danger text-center'>About </h2>
                    <h3 className='text-info'>Dr. Kaneez Fatema</h3>

                    <p className='fw-bold text-primary'>
                        <br />
                        Hello, This is Dr. Kaneez Fatema. I am a medicine specialist.
                        <br />
                        I am excited to provide care for children of all ages in the beautiful city of Chattogram, Bangladesh, and I look forward to delivering the best care for your family!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutInde;