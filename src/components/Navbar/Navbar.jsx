import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

    const cvDownloadLink = "https://docs.google.com/document/d/1yCn9VA3N7k754mDDu63nE-tGx9e3Msr7_r9ZszmD4Tc/export?format=pdf";

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                
                {/* Tech-styled Logo */}
                <a href="#home" className={styles.logo}>
                    <span className={styles.bracket}>&lt;</span>
                    MS
                    <span className={styles.slash}>/</span>
                    <span className={styles.bracket}>&gt;</span>
                </a>

                {/* Desktop Menu */}
                <ul className={styles.desktopMenu}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Tech Stack</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                {/* Buttons Container */}
                <div className={styles.actionButtons}>
                    <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle Theme">
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                    
                    <a 
                        href={cvDownloadLink} 
                        className={styles.cvBtn}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Get CV
                    </a>
                    
                    {/* Mobile Menu Icon */}
                    <div className={styles.menuIcon} onClick={toggleMenu}>
                        {isOpen ? '✕' : '☰'}
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <ul className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
                <li onClick={toggleMenu}><a href="#about">About</a></li>
                <li onClick={toggleMenu}><a href="#skills">Tech Stack</a></li>
                <li onClick={toggleMenu}><a href="#experience">Experience</a></li>
                <li onClick={toggleMenu}><a href="#projects">Projects</a></li>
                <li onClick={toggleMenu}><a href="#contact">Contact</a></li>
                <li onClick={toggleMenu}>
                    <a 
                        href={cvDownloadLink} 
                        className={styles.cvBtnMobile}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Get CV
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;