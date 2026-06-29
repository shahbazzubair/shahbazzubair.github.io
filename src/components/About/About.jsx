import styles from './About.module.css';
import pucitLogo from '../../assets/pucit.jpg'; 
import rcsLogo from '../../assets/rcs.jpg';

const About = () => {
    return (
        <section id="about" className={styles.aboutSection}>
            <div className={styles.container}>
                
                <h2 className={styles.title}>
                    Executive <span>Summary</span>
                </h2>

                <div className={styles.contentGrid}>
                    
                    {/* Left Side: Professional Overview (No Fluff) */}
                    <div className={styles.textColumn}>
                        <h3 className={styles.heading}>
                            Bridging architecture, logic, and data.
                        </h3>
                        
                        <p className={styles.description}>
                            I am an IT professional with a foundation in software engineering and systems architecture. My expertise centers on engineering reliable, scalable solutions—whether that means developing high-performance web applications, integrating machine learning models, or ensuring system integrity.
                        </p>
                        
                        <p className={styles.description}>
                            I focus on writing maintainable code and designing systems that scale. I approach technology as a tool to solve complex business logic, optimizing for both performance and deployment efficiency.
                        </p>

                        {/* Core Competencies (Skimmable for Recruiters) */}
                        <div className={styles.competencies}>
                            <span className={styles.compTag}>Full-Stack Development</span>
                            <span className={styles.compTag}>Systems Integration</span>
                            <span className={styles.compTag}>Data Architecture</span>
                            <span className={styles.compTag}>Quality Assurance</span>
                        </div>
                    </div>

                    {/* Right Side: Education History */}
                    <div className={styles.cardsColumn}>
                        <div className={styles.card}>
                            <h4 className={styles.cardTitle}>Academic Background</h4>
                            
                            <div className={styles.eduList}>
                                {/* University */}
                                <div className={styles.eduItem}>
                                    <div className={styles.eduLogoWrapper}>
                                        <img src={pucitLogo} alt="PUCIT" className={styles.eduLogo} />
                                    </div>
                                    <div className={styles.eduInfo}>
                                        <h5>BS Information Technology</h5>
                                        <span>PUCIT, Lahore</span>
                                        <span className={styles.date}>2022 - 2026</span>
                                    </div>
                                </div>

                                {/* College */}
                                <div className={styles.eduItem}>
                                    <div className={styles.eduLogoWrapper}>
                                        <img src={rcsLogo} alt="RCS" className={styles.eduLogo} />
                                    </div>
                                    <div className={styles.eduInfo}>
                                        <h5>Pre-Engineering</h5>
                                        <span>Royal College of Sciences, Chakwal</span>
                                        <span className={styles.date}>2020 - 2022</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;