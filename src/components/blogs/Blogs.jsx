import React from 'react'
import BackNav from '../routes/BackNav';
import AllBlogsCard from './AllBlogsCard';
import './styles/Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>
            <BackNav />
            <div className="container">
                <div className="header">
                    <h1>MY BLOGS</h1>
                    <p>Exploring ideas, sharing knowledge!</p>
                </div>

                <div className="all-blogs">
                    <AllBlogsCard />
                </div>
            </div>
        </div>
    )
}

export default Blogs
