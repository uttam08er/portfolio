import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/ProjectCard.css';

const ProjectCard = (props) => {
    const { projectId, image, title, description } = props.element;

    return (
        <div className="project-card" >
            <NavLink to={`/projects/${projectId}`}>
            <div className="card-style" style={{
                backgroundImage: `url(${image})`
            }} />
            </NavLink>

            {/* <h3>{title}</h3> */}
            {/* <p>{description}</p> */}
        </div>
    );
};

export default ProjectCard;