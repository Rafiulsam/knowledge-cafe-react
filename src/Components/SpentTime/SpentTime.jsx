import React from 'react';

const SpentTime = ({ blog }) => {
    let totalTime = 0
    let existBlogs =[]
    for (const time of blog) {
        if(!existBlogs.includes(time.id)){
            totalTime += time.read_time
            existBlogs.push(time.id)
        }
    }
    return (
        <div className='bg-[#6047ec1A] text-[#6047EC] p-5 rounded-lg text-center w-80'>
            <h1>Spent time on read: {totalTime} min</h1>
        </div>
    );
};

export default SpentTime;