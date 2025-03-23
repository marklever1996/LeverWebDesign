import React, { useEffect, useRef } from 'react';
import { FaReact, FaDatabase, FaPython, FaHtml5 } from 'react-icons/fa';
import { SiSymfony, SiCss3 } from 'react-icons/si';
import './MySkills.css';

const MySkills = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const cardsRef = useRef([]);

    const skills = [
        {
            name: 'HTML',
            icon: <FaHtml5 />,
            color: '#61DAFB',
            colorRGB: '97, 218, 251',
            description: 'Structuur en semantiek voor webpagina\'s'
        },
        {
            name: 'CSS',
            icon: <SiCss3 />,
            color: '#264DE4',
            colorRGB: '38, 77, 228',
            description: 'Modern styling met CSS modules, Flexbox/Grid en geavanceerde animaties'
        },
        {
            name: 'Python',
            icon: <FaPython />,
            color: '#3776AB',
            colorRGB: '55, 118, 171',
            description: 'Data processing, AI integratie en automation scripts voor efficiënte workflows'
        },
        {
            name: 'Symfony',
            icon: <SiSymfony />,
            color: '#3d8fdc',
            colorRGB: '61, 143, 220',
            description: 'Robuuste back-end architectuur met Symfony framework, API Platform en Doctrine ORM'
        },
        {
            name: 'MySQL',
            icon: <FaDatabase />,
            color: '#00758F',
            colorRGB: '0, 117, 143',
            description: 'Database ontwerp, optimalisatie en beheer met focus op performance en schaalbaarheid'
        },
        {
            name: 'React',
            icon: <FaReact />,
            color: '#61DAFB',
            colorRGB: '97, 218, 251',
            description: 'Modern front-end development met React hooks, custom components en state management'
        }
    ];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        if (headingRef.current) {
            observer.observe(headingRef.current);
        }

        cardsRef.current.forEach(card => {
            if (card) {
                observer.observe(card);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="skills" ref={sectionRef}>
            <div className="container">
                <h2 ref={headingRef}>
                    <span className="primary">Mijn</span>{' '}
                    <span className="secondary">Tech Stack</span>
                </h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div 
                            className="skill-card" 
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                        >
                            <div 
                                className="skill-icon"
                                style={{ 
                                    '--skill-color': skill.color,
                                    '--skill-color-rgb': skill.colorRGB
                                }}
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