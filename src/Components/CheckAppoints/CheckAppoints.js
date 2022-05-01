import React from 'react';

const CheckAppoints = () => {
    return (
        <div className='from-container'>
            <form >
                <div>
                    <h3 className='from-title text-primary text-center fw-bold m-3'>To Get Serial give the bellow Information</h3>
                    <div className="input-group">
                        <input type="text" name="" id="" required placeholder='Enter your Name' />
                    </div>
                    <div className="input-group">
                        <input type="test" name="" id="" required placeholder='Enter your Email' />
                    </div>
                    <div className="input-group">
                        <input type="text" name="" id="" required placeholder='Enter Your Address' />
                    </div>
                    <div className="input-group">
                        <input type="text" name="" id="" required placeholder='Enter Contact Number' />
                    </div>
                    <div className='text-center'>
                        <input className='from-submit bg-primary fw-bold' type="submit" value="Confirm" />
                    </div>
                </div>


            </form>
        </div>
    );
};

export default CheckAppoints;