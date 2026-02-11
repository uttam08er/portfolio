import BackNav from '../routes/BackNav';
import AllProjectCard from './AllProjectCard';
import './styles/Projects.css';


const Projects = () => {
    return (
        <div className='projects'>
            <BackNav />
            <div className="container">
                <div className="header">
                    <h1>MY PROJECTS</h1>
                    <p>Most recent works</p>
                </div>

                <div className='all-projects'>
                    <AllProjectCard />
                </div>
            </div>
        </div>
    )
}

export default Projects;
