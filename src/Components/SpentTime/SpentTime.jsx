import React from 'react';

const SpentTime = ({ blog }) => {
    let totalTime = 0
    for (const time of blog) {
        totalTime += time.read_time
        console.log(totalTime);
    }
    return (
        <div className='bg-[#6047ec1A] text-[#6047EC] p-5 rounded-lg text-center w-80'>
            <h1>Spent time on read: {totalTime} min</h1>
        </div>
    );
};

export default SpentTime;