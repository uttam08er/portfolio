import React from 'react';
import { FaCalendar, FaArrowRight } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import './styles/BlogsCard.css';


const BlogsCard = (props) => {
    const { blogsId, publishedAt, image, title } = props.element;
    return (
        <div className="blogs-card">
            <NavLink to={`/portfolio/blogs/${blogsId}`}>
                <div className="card-style" style={{
                    backgroundImage: `url(${image})`
                }} />

                <div className="card-content">
                    <p className='blog-card--title'>{title}</p>
                    <div className="blog-date">
                        <p><FaCalendar className='blog-icon' />
                            <span className='date'>
                                {new Date(publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span></p>
                        <p><FaArrowRight className='blog-icon' /></p>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default BlogsCard;