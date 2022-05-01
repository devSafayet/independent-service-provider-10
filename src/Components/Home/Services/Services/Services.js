import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [appointment, setAppointment] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setAppointment(data))

    }, [])
    return (
        <div className='container'>
            <h3 className='mt-5 fs-bold  text-center appoint'>Get Appointment</h3>
            <div className='row'>
                {
                    appointment.map((appoint) => <Service key={appointment.id} appoint={appoint} ></Service>)
                }


            </div>
        </div>
    );
};

export default Services;