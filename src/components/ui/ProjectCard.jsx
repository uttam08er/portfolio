import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import './styles/ProjectCard.css';

const ProjectCard = (props) => {
    const { projectId, image, title } = props.element;

    return (
        <div className="project-card" >
            <NavLink to={`/portfolio/projects/${projectId}`} aria-label={`View project details for ${title}`}>
                <div className="card-style" style={{
                    backgroundImage: `url(${image})`
                }} />
                {/* <div className="card-content">
                    <p className="project-title">{title}</p>
                    <FaArrowRight className="arrow-icon" />
                </div> */}
            </NavLink>
        </div>
    );
};

export default ProjectCard;