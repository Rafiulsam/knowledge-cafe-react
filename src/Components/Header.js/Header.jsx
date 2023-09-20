import React from 'react';
import png from '../../../public/images/profile.png'

const Header = () => {
    return (
        <div className='max-w-xs mx-auto lg:max-w-5xl border-b pb-8 mt-12'>
            <div className='text-center lg:flex justify-between items-center'>
                <h1 className='font-bold text-4xl mb-5 lg:mb-0'>Knowledge Cafe</h1>
                <div className='flex justify-between items-center gap-10'>
                    <div className='flex justify-center lg:justify-between items-center gap-10'>
                        <a href="home">Home</a>
                        <a href="team">Team</a>
                        <a href="about">About us</a>
                    </div>
                    <img className=' w-9 h-9 lg:w-[60px] lg:h-[60px] mx-auto' src={png} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;