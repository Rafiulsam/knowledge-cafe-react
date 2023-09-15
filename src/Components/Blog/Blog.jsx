import React from 'react';

const Blog = (props) => {
    const {img, author_name, blog_title, published_date, read_time}= props.blog;
    return (
        <div className='mb-10'>
            <img className='h-[400px] w-full rounded-lg' src={img} alt="" />
        </div>
    );
};

export default Blog;