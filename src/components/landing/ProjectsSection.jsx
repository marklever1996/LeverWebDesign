import React, { useEffect, useRef } from 'react';
import StudioStarImage from '../../images/Studiostar.png';
import HanemaImage from '../../images/Hczorg.png';
import PaperbaseImage from '../../images/Paperbase.png';
import { FaGithub } from 'react-icons/fa';
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
            title: "Mijn Github",
            description: "Moderne dashboards, applicaties en websites",
            image: <FaGithub />,
            link: "https://github.com/marklever1996",
            icon: <FaGithub />,
            tech: ["React", "Material-UI", "JavaScript"]
        }
    ];

    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe heading
        if (headingRef.current) {
            observer.observe(headingRef.current);
        }

        // Observe project cards
        cardsRef.current.forEach(card => {
            if (card) {
                observer.observe(card);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className="projects" id="projects" ref={sectionRef}>
            <h2 ref={headingRef}>
                <span>Mijn</span>{' '}
                <span>projecten</span>
            </h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="project-card"
                        ref={el => cardsRef.current[index] = el}
                    >
                        {typeof project.image === 'string' ? (
                            <img src={project.image} alt={project.title} />
                        ) : (
                            <div className="project-icon">
                                {project.image}
                            </div>
                        )}
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
                            <div className="project-links">
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    Bekijk projecten
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection; 