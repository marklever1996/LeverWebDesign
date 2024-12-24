import React from 'react';
import StudioStarImage from '../../images/Studiostar.png';
import HanemaImage from '../../images/Hczorg.png';
import PaperbaseImage from '../../images/Paperbase.png';
import './ProjectsSection.css';

const ProjectsSection = () => {
    const projects = [
        {
            title: "Studio Star",
            description: "Een website voor een fotostudio",
            image: StudioStarImage,
            link: "https://studiostar.nl/",
            external: true
        },
        {
            title: "Hanema Consultancy",
            description: "Een website voor een zorgconsultancy",
            image: HanemaImage,
            link: "https://hczorg.nl/",
            external: true
        },
        {
            title: "Paperbase",
            description: "Een website voor SaaS webapplicatie",
            image: PaperbaseImage,
            link: "https://paperbase.nl/",
            external: true
        }
    ];

    return (
        <section className="projects" id="projects">
            <h2>
                <span>Mijn</span>{' '}
                <span>projecten</span>
            </h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        {project.external ? (
                            <a 
                                href={project.link} 
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Bekijk project
                            </a>
                        ) : (
                            <a href={project.link} className="project-link">
                                Bekijk project
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection; 