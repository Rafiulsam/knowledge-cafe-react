import React from 'react';

const Bookmarks = ({bookmarkedBlogs}) => {
  return (
    <div className='bg-[#1111110D] rounded-lg p-7 mt-6'>
      <h1 className='text-xl'>Bookmarked Blogs: {bookmarkedBlogs.size}</h1>
      {Array.from(bookmarkedBlogs).map((blog, i) => (
        <div key={i} className='bg-white mb-5 w-full rounded-lg p-5 mt-4'>
          <h1>{blog.blog_title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Bookmarks