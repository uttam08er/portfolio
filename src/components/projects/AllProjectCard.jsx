import React from 'react'
import ProjectCard from '../ui/ProjectCard';
import ProjectsData from '../../assets/data/projects-data.json';
import './styles/AllProjectCard.css';

const AllProjectCard = ({ limit }) => {
    const visible = limit || ProjectsData.length;

    return (
        <>
            <div className="project-cards grid-four--cols">
                {ProjectsData.slice(0, visible).map((element) => {
                    return <ProjectCard key={element.projectId} element={element} />
                })}
            </div>
        </>
    )
}

export default AllProjectCard;
