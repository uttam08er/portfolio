import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { FaCircle, FaCode } from "react-icons/fa6";
import blogsData from '../../assets/data/blogs-data.json';
import NotAvailable from '../routes/NotAvailable';
import BackNav from '../routes/BackNav';
import BlogPage from '../blogs/BlogPage2';
// import './styles/BlogDetailsPage.css';

export const BlogDetailsLoader = ({ params }) => {
  const blog = blogsData.find(item => item.blogsId?.toString() === params.blogsId);

  if (!blog) {
    throw new Response("Not Found", { status: 404 });
  }
  return blog;
}

const BlogDetailsPage = () => {
  const blog = useLoaderData();
  const { showBlog, blogsId, title, image } = blog;

  return (
    <>
      {showBlog ? (
        <>
          <BackNav />
          <div className='container'>
            {/* <BlogPage /> */}
            <p>{blogsId}</p>
            <h4>{title}</h4>
          </div>
        </>
      ) : (<NotAvailable />)}
    </>
  )
}

export default BlogDetailsPage;
