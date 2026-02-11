import { Element } from 'react-scroll'
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import AllProjectCard from '../projects/AllProjectCard';
import './styles/ProjectSection.css';


const ProjectSection = () => {
  const navigate = useNavigate();

  const handleMoreClick = () => {
    navigate('/portfolio/projects');
  };

  return (
    <Element name='projects' className='block'>
      <div className="container">
        <div className="header">
          <h1>MY PROJECTS</h1>
          <p>Most recent works</p>
        </div>

        <section className="projects">
          <AllProjectCard limit={4} />
        </section>
        <div className="more-items">
          <Button onClick={handleMoreClick} variant="secondary">More Works</Button>
        </div>
      </div>
    </Element>
  );
};

export default ProjectSection;