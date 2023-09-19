import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons';

const Blog = ({ blog, addReadTime, addToBookmark}) => {
  const { img, author_name, author_img, blog_title, published_date, read_time } = blog;
  return (
    <div className='mb-10'>
      <img className='h-[400px] w-full rounded-lg' src={img} alt='' />
      <div className='mt-8 flex justify-between items-center '>
        <div className='flex gap-6 items-center'>
          <img className='w-14' src={author_img} alt='' />
          <div>
            <h1>{author_name}</h1>
            <p>{published_date}</p>
          </div>
        </div>
        <div className='flex gap-1'>
          <p>{read_time} min read</p>
          <button onClick={() => addToBookmark(blog)}>
            <FontAwesomeIcon icon={regularBookmark} />
          </button>
        </div>
      </div>
      <h1 className='mt-5 font-bold text-3xl'>{blog_title}</h1>
      <p className='mt-4 mb-5'>#beginners #programming</p>
      <button onClick={() => addReadTime(blog)} className='underline text-[#6047EC] font-semibold' href=''>
        Mark as read
      </button>
      <hr className='mt-8' />
    </div>
  );
};

export default Blog;
