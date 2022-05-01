import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-4'>
            <div className='pb-3'>
                <h5>
                    Question-1:
                    <span className='text-primary'> Difference Between Authorization and Authentication?</span>
                </h5>
                <p>Answer:-
                    <span className='text-success'>
                        Authentication: <br />
                        ১। এই সেকশন এ User এর পরিচয় যাচাই করা হয় এবং তাকে Access দেওয়া হয় । <br />
                        ২। এখানে User এর Infomation যাচাই করা হয় এবং যা Authorization Process এর পূর্বে করা হয় । <br />
                        ৪। Authentication যাচাই করে Access চাওয়া ব্যাক্তি ইউজার কিনা। <br /> <br />

                        Authorization : <br />
                        ১। Authorization Process চলাকালীন Authorities User কে পরীক্ষা করে রিসোস Access করার আনুমতি দেয় । <br />
                        ২। User Valid কিনা তা এখানে যাচাই করা হয় । <br />
                        ৩। এইটা Authentication এর পরে চালানো হয় । <br />
                    </span>
                </p>
            </div>
            <div className='pb-3'>
                <h5>
                    Question-2:
                    <span className='text-primary'> Why we use Firebase?</span>
                </h5>
                <p>Answer:- <br />
                    <span className='text-success'>
                        ১) Firebase ব্যবহার করে অনেক সহজে ইউজার ওয়েবসাইটে প্রবেশ করতে পারে। <br />
                        ২) Firebase ব্যবহার করে ইউজার এর ডাটা নিরাপদে রাখা যায়। যা ৩য় ব্যবহার Access নিতে পারে না। <br />
                        ৩) Firebase এর মাধ্যমে অনেক সহজে Google, Facebook, Github etc. ব্যবহার করে User কে সাইটে প্রবেশ করানো যায়। <br />
                    </span>
                </p>
            </div>
            <div>
                <h5>
                    Question-3:
                    <span className='text-primary'> without authentication what we can do with firebase?</span>
                </h5>
                <p>Answer:-
                    <br />
                    <span className='text-success'>
                        1/ For Web Hosting. <br />
                        2/ For Android App Development.<br />
                        3/ For IOS Application.<br />
                        4/ For Web Game Development.<br />
                    </span>
                </p>
            </div>

        </div>
    );
};

export default Blogs;