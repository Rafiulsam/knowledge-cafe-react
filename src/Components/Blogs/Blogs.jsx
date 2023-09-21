import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmarks from '../Bookmarks/Bookmarks';
import SpentTime from '../SpentTime/SpentTime';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const customId = "custom-id-yes";
const customWidth = "mx-auto w-80 lg:w-full";

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
      toast.warn('This blog is already added to the bookmark', {
        toastId: customId,
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "light",
        className: customWidth
      });

    }
    else {
      setBookmarkedBlogs(new Set([...bookmarkedBlogs, blog]));

    }
  };

  return (
    <div className='mx-auto max-w-xs lg:max-w-5xl border-b pb-8 mt-12 lg:grid grid-flow-col gap-6 relative'>
      <div>
        {blogs.map((blog, i) => (
          <Blog
            key={i}
            addToBookmark={addToBookmark}
            addReadTime={addReadTime}
            blog={blog}
            isLast={i === blogs.length - 1}
          ></Blog>
        ))}
      </div>
      <div>
        <div className='sticky top-5 lg:w-96'>
          <SpentTime readTime={readTime}></SpentTime>
          <Bookmarks bookmarkedBlogs={bookmarkedBlogs}></Bookmarks>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          limit={1}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
};

export default Blogs;