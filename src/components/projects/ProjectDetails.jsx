import { useLoaderData } from 'react-router-dom';
import { FaCircle, FaCode } from "react-icons/fa6";
import projectsData from '../../assets/data/projects-data.json';
import ComingSoon from '../routes/ComingSoon';
import BackNav from '../routes/BackNav';
import './styles/ProjectDetails.css';


export const ProjectDetailsLoader = ({ params }) => {
    const project = projectsData.find(item => item.projectId?.toString() === params.projectId);

    if (!project) {
        throw new Response("Not Found", { status: 404 });
    }
    return project;
}

const ProjectDetails = () => {
    const project = useLoaderData();
    const { projectId, showData, title, description, image, technologies, liveUrl, githubUrl, category } = project;

    return (
        <>
            {showData ? (
                <>
                    <BackNav />
                    <div className='project-details container block'>
                        <section className="grid-two--cols">
                            <img className='project-image' src={image} alt={title} />
                            <div className='details'>
                                <div className="all-details">
                                    <div className="title-bar">
                                        <h4 className='project-title'>{title}</h4>
                                        <p className='project-type'>{category}</p>
                                    </div>
                                    <p className='project-description'>{description}</p>
                                    <div className='technologies'>
                                        <h4 className='tech-title'>Technologies:</h4>
                                        <ul >
                                            {technologies.map((tech, index) => (
                                                <li className='technologies-item' key={index}>{tech}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className='links'>
                                        {githubUrl && (
                                            <a className="source-link" href={githubUrl} target="_blank" rel="noopener noreferrer">
                                                <FaCode className='icon github-icon' />
                                                Source Code
                                            </a>
                                        )}

                                        {liveUrl && (
                                            <a className="live-link" href={liveUrl} target="_blank" rel="noopener noreferrer">
                                                <FaCircle className='icon link-icon' />
                                                {category === 'Web App' ? 'Live Demo' : 'Download'}
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className="side-bar">{title}</div>
                            </div>
                        </section>
                    </div>
                </>
            ) : (
                <ComingSoon />
            )}
        </>
    );
}

export default ProjectDetails;