import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmarks from '../Bookmarks/Bookmarks';
import SpentTime from '../SpentTime/SpentTime';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [readTime, setReadTime] = useState([]);
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState(new Set());
  
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const addReadTime = (time) => {
    setReadTime([...readTime, time]);
  };

  const addToBookmark = (blog) => {
    if (bookmarkedBlogs.has(blog)) {
      alert("This blog is already bookmarked")

    }
    else {
      setBookmarkedBlogs(new Set([...bookmarkedBlogs, blog]));

    }
  };

  return (
    <div className='mx-auto max-w-5xl border-b pb-8 mt-12 grid grid-flow-col gap-6 relative'>
      <div>
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            addToBookmark={addToBookmark}
            addReadTime={addReadTime}
            blog={blog}
          ></Blog>
        ))}
      </div>
      <div>
        <div className='sticky top-5 w-96'>
          <SpentTime readTime={readTime}></SpentTime>
          <Bookmarks bookmarkedBlogs={bookmarkedBlogs}></Bookmarks>
        </div>
      </div>
    </div>
  );
};

export default Blogs;