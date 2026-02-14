import { useState } from 'react';
import './Projects.css';
import re123 from '../assets/re-123.png'; // adjust path if needed

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Real Estate Platform',
      description: ['Developed full-stack real estate platform with React and Firebase'],
      tech: ['React.js • Firebase • JavaScript • CSS3'],
      demoLink: 'https://s-properties-client-friendly.vercel.app',
      githubLink: 'https://C.com/Sanjana-12352/S-PROPERTIES-Client-friendly',
      category: 'completed',
      status: 'COMPLETED',
      icon: '🏠'
    },
    {
      id: 2,
      title: 'Project Hub Platform',
      description: ['Portfolio management system with collaboration tools'],
      tech: ['React', 'JavaScript', 'HTML/CSS'],
      demoLink: '#',
      githubLink: '#',
      category: 'copleted',
      status: 'completed'
    },
    {
      id: 3,
      title: 'AI Agent Application',
      description: ['An AI agent for job applications and automation'],
      tech: ['Python', 'AI/ML', 'MCP'],
      demoLink: '#',
      githubLink: '#',
      category: 'ongoing',
      status: 'ONGOING'
    },
    {
      id: 4,
      title: 'Upcoming Project',
      description: ['AI job assistant with multiple features'],
      tech: ['Node.js', 'React', 'RESTful API', 'MediaCapabilities', 'AI'],
      demoLink: null,
      githubLink: null,
      category: 'upcoming',
      status: 'UPCOMING'
    }
  ];

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Completed', value: 'completed' },
    { label: 'Ongoing', value: 'ongoing' },
    { label: 'Upcoming', value: 'upcoming' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-filter">
          {filters.map((filterBtn) => (
            <button
              key={filterBtn.value}
              className={`filter-btn ${filter === filterBtn.value ? 'active' : ''}`}
              onClick={() => setFilter(filterBtn.value)}
            >
              {filterBtn.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className={`project-status status-${project.category}`}>
                {project.status}
              </div>
              <div className="project-image">
              
                {project.icon && <span className="project-icon">{project.icon}</span>}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                {Array.isArray(project.description)
                  ? project.description.map((desc, idx) => <p key={idx}>{desc}</p>)
                  : <p>{project.description}</p>
                }
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.demoLink && project.demoLink !== '#' && (
                    <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      → View Demo
                    </a>
                  )}
                  {project.githubLink && project.githubLink !== '#' && (
                    <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      → GitHub
                    </a>
                  )}
                  {(!project.demoLink || project.demoLink === '#') && (!project.githubLink || project.githubLink === '#') && (
                    <span className="project-link">→ Coming Soon</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
