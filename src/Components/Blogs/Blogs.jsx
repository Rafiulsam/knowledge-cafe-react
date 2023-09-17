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

    const [blog, setBlog] = useState([])
    const addReadTime = (blogs) => {
        const newBlog = [...blog, blogs]
        setBlog(newBlog)


    }

    return (
        <div className='mx-auto max-w-5xl border-b pb-8 mt-12 grid grid-flow-col gap-6 relative'>
            <div>
                {
                    blogs.map(blog => <Blog addReadTime={addReadTime} blog={blog} key={blog.id}></Blog>)
                }
            </div>
            <div>
                <div className='sticky top-5'>
                    <SpentTime blog={blog} ></SpentTime>
                    <Bookmarks ></Bookmarks>
                </div>
            </div>
        </div>
    );
};

export default Blogs;