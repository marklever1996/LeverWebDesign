import React from 'react';

const ProjectsSection = () => {
    const projects = [
        {
            title: "Budget Tracker",
            description: "Een applicatie om je uitgaven bij te houden",
            image: "/images/budget-tracker.png",
            link: "/projects/budget-tracker"
        },
        {
            title: "Recruivia",
            description: "AI-gedreven recruitment software",
            image: "/images/recruivia.png",
            link: "/projects/recruivia"
        }
    ];

    return (
        <section className="projects">
            <h2>Recente Projecten</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} className="project-link">
                            Bekijk project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection; 