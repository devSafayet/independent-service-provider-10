import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact m-5">
            <div className="container">
                <div className="title text-primary">
                    <h1>Contact us form</h1>
                </div>
                <div className="contact-form">
                    <div className="input-fields">
                        <input type="text" className="input" placeholder="Name" />
                        <input type="text" className="input" placeholder="Email Address" />
                        <input type="text" className="input" placeholder="Phone" />
                        <input type="text" className="input" placeholder="Subject" />
                    </div>
                    <div className="msg">
                        <textarea placeholder="Message" />
                        <button className="btn btn-primary">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;