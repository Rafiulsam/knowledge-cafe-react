import React from 'react';
import png from '../../images/profile.png'

const Header = () => {
    return (
        <div className='mx-auto max-w-5xl border-b pb-8 mt-12'>
            <div className='flex justify-between items-center'>
                <h1 className='font-bold text-4xl'>Knowledge Cafe</h1>
                <div className='flex justify-between items-center gap-10'>
                    <a href="home">Home</a>
                    <a href="blog">Blog</a>
                    <a href="team">Team</a>
                    <img src={png} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;