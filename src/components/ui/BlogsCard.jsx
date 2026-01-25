import React from 'react';
import { FaCalendar, FaArrowRight } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import './styles/BlogsCard.css';
// import BlogPage from '../blogs/BlogPage';
// import { Routes, Route } from 'react-router-dom';


const BlogsCard = (props) => {
    const { blogsId, date, image, title, description } = props.element;
    return (
        <div className="blogs-card">
            <NavLink to={`/portfolio/blogs/${blogsId}`}>
                <div className="card-style" style={{
                    backgroundImage: `url(${image})`
                }} />

                <div className="card-content">
                    <div className="blog-date">
                        <p><FaCalendar className='blog-icon' /><span className='date'>{date}</span></p>
                        <p><FaArrowRight className='blog-icon' /></p>
                    </div>
                    <h4>{title}</h4>
                </div>
            </NavLink>
        </div>
    );
};

export default BlogsCard;