import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import './Header.css';
import useScrollToElement from '../hooks/useScrollToElement';



const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem('mode') === 'dark'
    );
    const scrollToElement = useScrollToElement();

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

    const handlePortfolioClick = (e) => {
        e.preventDefault();
        setIsMenuOpen(false);
        scrollToElement('projects');
    };

    const handleNavClick = () => {
        setIsMenuOpen(false);
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 100);
    };

    return (
        <header>
            <div className="container">
                <nav className="nav-bar">
                    <Link to="/" className="nav-branding" onClick={handleNavClick}>
                        <img src={logo} alt="LeverWebDesign Logo" className="logo" />
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
                            <Link to="/" className="nav-link" onClick={handleNavClick}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/over-mij" className="nav-link" onClick={handleNavClick}>
                                Over mij
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/diensten" className="nav-link" onClick={handleNavClick}>
                                Diensten
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a 
                                href="/#portfolio" 
                                className="nav-link" 
                                onClick={handlePortfolioClick}
                            >
                                Portfolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link" onClick={handleNavClick}>
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
                            <label htmlFor="mode-toggle" className="toggle-label">
                                <svg className="sun-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <circle r="5" cx="12" cy="12"></circle>
                                    <line x1="12" y1="3" x2="12" y2="1"></line>
                                    <line x1="12" y1="23" x2="12" y2="21"></line>
                                    <line x1="3" y1="12" x2="1" y2="12"></line>
                                    <line x1="23" y1="12" x2="21" y2="12"></line>
                                    <line x1="5.6" y1="5.6" x2="4.2" y2="4.2"></line>
                                    <line x1="18.4" y1="18.4" x2="19.8" y2="19.8"></line>
                                    <line x1="5.6" y1="18.4" x2="4.2" y2="19.8"></line>
                                    <line x1="18.4" y1="5.6" x2="19.8" y2="4.2"></line>
                                </svg>
                                <svg className="moon-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
                                </svg>
                            </label>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header; 