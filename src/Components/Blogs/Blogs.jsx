import React, { useEffect, useState } from 'react';
const Blogs = () => {
    const [blog, setBlog] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    return (
        <div>
            {
                blog.map(b => console.log(b))
            }
        </div>
    );
};

export default Blogs;