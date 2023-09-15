import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const Blog = (props) => {
    console.log(props.blog);
    const { img, author_name, author_img, blog_title, published_date, read_time } = props.blog;
    return (
        <div className='mb-10'>
            <img className='h-[400px] w-full rounded-lg' src={img} alt="" />
            <div className='mt-8 flex justify-between items-center '>
                <div className='flex gap-6 items-center'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h1>{author_name}</h1>
                        <p>{published_date}</p>
                    </div>
                </div>
                <div className='flex gap-1'>
                    <p>{read_time} min read</p>
                    <button> <FontAwesomeIcon icon={faBookmark} /> </button>
                </div>
            </div>
            <h1 className='mt-5 font-bold text-3xl'>{blog_title}</h1>
            <p className='mt-4 mb-5'>#beginners  #programming</p>
            <a className='underline' href="">Mark as read</a>
            <hr  className='mt-8'/>
        </div>
    );
};

export default Blog;