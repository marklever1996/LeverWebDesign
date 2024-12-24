import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaDatabase, FaPython } from 'react-icons/fa';
import './MySkills.css';

const MySkills = () => {
    const skills = [
        {
            name: 'HTML5',
            icon: <FaHtml5 />,
            color: '#E44D26',
            description: 'Semantic HTML, Accessibility, SEO-optimalisatie'
        },
        {
            name: 'CSS3',
            icon: <FaCss3Alt />,
            color: '#264DE4',
            description: 'Responsive Design, Flexbox, Grid, Animaties'
        },
        {
            name: 'JavaScript',
            icon: <FaJs />,
            color: '#F7DF1E',
            description: 'ES6+, DOM Manipulatie, Async/Await'
        },
        {
            name: 'React',
            icon: <FaReact />,
            color: '#61DAFB',
            description: 'Hooks, Context, Router, State Management'
        },
        {
            name: 'PHP',
            icon: <FaPhp />,
            color: '#777BB3',
            description: 'Server-side Logic, API Development'
        },
        {
            name: 'MySQL',
            icon: <FaDatabase />,
            color: '#00758F',
            description: 'Database Design, Queries, Optimalisatie'
        }
    ];

    return (
        <section className="skills">
            <div className="container">
                <h2>
                    <span className="primary">Mijn</span>{' '}
                    <span className="secondary">Vaardigheden</span>
                </h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <div 
                                className="skill-icon"
                                style={{ '--skill-color': skill.color }}
                            >
                                {skill.icon}
                            </div>
                            <h3>{skill.name}</h3>
                            <p>{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MySkills; 