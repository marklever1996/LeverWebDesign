import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';
import useScrollToElement from '../hooks/useScrollToElement';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const scrollToElement = useScrollToElement();

    const handlePortfolioClick = (e) => {
        e.preventDefault();
        scrollToElement('projects');
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-grid">
                    <div className="footer-section">
                        <h3>Contact</h3>
                        <ul>
                            <li>
                                <a href="mailto:info@leverwebdesign.nl">
                                    info@leverwebdesign.nl
                                </a>
                            </li>
                            <li>
                                <a href="tel:+31639131017">
                                    +31 6 39 13 10 17
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Links</h3>
                        <ul>
                            <li><Link to="/over-mij">Over Mij</Link></li>
                            <li><Link to="/diensten">Diensten</Link></li>
                            <li>
                                <a 
                                    href="/#portfolio" 
                                    onClick={handlePortfolioClick}
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Volg Mij</h3>
                        <div className="social-links">
                            <a 
                                href="https://github.com/marklever1996" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/mark-lever-5b2b07121" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        © {currentYear} Lever Web Design
                        <span className="separator">|</span>
                        <span className="kvk">KVK: 94208603</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
