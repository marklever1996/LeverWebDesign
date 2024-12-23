import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem('mode') === 'dark'
    );

    useEffect(() => {
        // Initiële darkmode instelling
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        }
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleDarkModeToggle = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('mode', isDarkMode ? 'light' : 'dark');
    };

    return (
        <header>
            <div className="container">
                <nav className="nav-bar">
                    <Link to="/" className="nav-branding">
                        <div className="neon-text" id="neonText">
                            <span>D</span><span>a</span><span>r</span><span>k</span>
                            <span>-</span><span>M</span><span>o</span><span>d</span><span>e</span>
                        </div>
                    </Link>

                    <div 
                        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>

                    <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        <li className="nav-item">
                            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                                Over mij
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                                Diensten
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/#portfolio" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                                Contact
                            </Link>
                        </li>
                        <div className="toggle-container">
                            <input 
                                type="checkbox" 
                                id="mode-toggle" 
                                className="toggle-switch"
                                checked={isDarkMode}
                                onChange={handleDarkModeToggle}
                            />
                            <label htmlFor="mode-toggle" className="toggle-label"></label>
                            <span 
                                className="toggle-text"
                                style={{ color: isDarkMode ? '#3d8fdc' : 'lightgray' }}
                            >
                                {isDarkMode ? 'Light' : 'Dark'}
                            </span>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header; 