import React from 'react';

const SpentTime = ({readTime}) => {
    let totalTime = 0
    for (const time of readTime) {{
            totalTime += time.read_time
           
        }
    }
    return (
        <div className='bg-[#6047ec1A] text-[#6047EC] p-5 rounded-lg text-center'>
            <h1 className='text-xl'>Spent time on read: {totalTime} min</h1>
        </div>
    );
};

export default SpentTime;