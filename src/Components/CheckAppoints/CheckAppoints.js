import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CheckAppoints = () => {
    return (
        <div className='login-container'>
            <form >
                <div>
                    <h3 className='from-title text-primary text-center fw-bold m-3 pb-3 '>To Get Serial give the bellow Information</h3>
                    <form className="login-form">
                        <input type="text" name="" id="" required placeholder='Enter Present Name' />

                        <input type="text" name="" id="" required placeholder='Enter Present Age' />

                        <input type="test" name="" id="" required placeholder='Enter your Email' />

                        <input type="text" name="" id="" required placeholder='Enter Your Address' />

                        <input type="text" name="" id="" required placeholder='Enter Contact Number' />
                    </form>
                    <div>
                        <Button variant="" className='submit-btn pt-1' as={Link} to='/successapooint'>Comfirm</Button>
                    </div>
                </div>


            </form>
        </div>
    );
};

export default CheckAppoints;