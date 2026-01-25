import React from 'react';
import { Element } from 'react-scroll';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import AllBlogsCard from '../blogs/AllBlogsCard';
import './styles/MyBlogs.css';

const MyBlogs = () => {
  const navigate = useNavigate();

  const handleMoreClick = () => {
    navigate('/portfolio/blogs');
  };

  return (
    <Element name='blogs'>
      <div className="block">
        <div className="container">
          <div className="header">
            <h1>MY BLOGS</h1>
            <p>Welcome to my blog! Here, I share my thoughts, insights, and experiences in the tech world.</p>
          </div>

          <section className="blogs">
            <AllBlogsCard limit={4} />
          </section>
          <div className="more-items">
            <Button onClick={handleMoreClick} variant="secondary">More Works</Button>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default MyBlogs;