import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmarks from '../Bookmarks/Bookmarks';
import SpentTime from '../SpentTime/SpentTime';
const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='mx-auto max-w-5xl border-b pb-8 mt-12 grid grid-flow-col gap-6'>
            <div>
                {
                    blogs.map(blog => <Blog blog={blog}></Blog>)
                }
            </div>
            <div>
                <SpentTime></SpentTime>
                <Bookmarks></Bookmarks>
            </div>
        </div>
    );
};

export default Blogs;