import styles from './Footer.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                
                {/* Top Section: 3 Columns */}
                <div className={styles.content}>
                    
                    {/* Column 1: Brand Info */}
                    <div className={styles.brand}>
                        <a href="#home" className={styles.logo}>
                            <span className={styles.bracket}>&lt;</span>
                            MS
                            <span className={styles.slash}>/</span>
                            <span className={styles.bracket}>&gt;</span>
                        </a>
                        <p className={styles.tagline}>
                            Engineering scalable web architectures and intelligent data systems.
                        </p>
                    </div>

                    {/* Column 2: Quick Links (Terminal Style) */}
                    <div className={styles.quickLinks}>
                        <h3 className={styles.heading}>Directory</h3>
                        <a href="#about" className={styles.link}><span>&gt;</span> About</a>
                        <a href="#skills" className={styles.link}><span>&gt;</span> Tech Stack</a>
                        <a href="#experience" className={styles.link}><span>&gt;</span> Experience</a>
                        <a href="#projects" className={styles.link}><span>&gt;</span> Projects</a>
                    </div>

                    {/* Column 3: Socials */}
                    <div className={styles.socialColumn}>
                        <h3 className={styles.heading}>Network</h3>
                        <div className={styles.socialIcons}>
                            <a href="https://github.com/shahbazzubair" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaGithub className={styles.icon} />
                            </a>
                            <a href="https://www.linkedin.com/in/shahbazzubair/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin className={styles.icon} />
                            </a>
                            <a href="mailto:theeshahbaz@gmail.com" aria-label="Email">
                                <FaEnvelope className={styles.icon} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Section: Copyright */}
                <div className={styles.bottomBar}>
                    <p>&copy; {new Date().getFullYear()} System Initialized by Muhammad Shahbaz. All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;