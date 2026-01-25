import React from 'react'
import BlogsCard from '../ui/BlogsCard'
import BlogsData from '../../assets/data/blogs-data.json';
import './styles/AllBlogsCard.css';

const AllBlogsCard  = ({ limit }) => {
    const visible = limit || BlogsData.length;

    return (
        <>
            <div className="blog-cards grid-four--cols">
                {BlogsData.slice(0, visible).map((element) => {
                    return <BlogsCard key={element.blogsId} element={element} />
                })}
            </div>
        </>
    )
}

export default AllBlogsCard
