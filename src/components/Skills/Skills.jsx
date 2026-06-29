import styles from './Skills.module.css';

import { FaPython, FaJs, FaReact, FaCode, FaNetworkWired, FaGitAlt, FaGithub, FaNodeJs } from 'react-icons/fa';
import { SiCplusplus, SiVite, SiFastapi, SiMysql, SiMongodb, SiTensorflow, SiKeras, SiOpencv, SiPostman, SiPostgresql, SiExpress } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const Skills = () => {
    return (
        <section id="skills" className={styles.skillsSection}>
            <div className={styles.container}>
                
                <h2 className={styles.title}>
                    Tech <span>Stack</span>
                </h2>

                {/* Compact 2x2 Grid for Desktop */}
                <div className={styles.categoriesGrid}>
                    
                    {/* Block 1: Core Languages */}
                    <div className={styles.category}>
                        <h3 className={styles.categoryTitle}>&gt; Core_Languages</h3>
                        <div className={styles.skillsGrid}>
                            <div className={styles.skillCard}>
                                <FaPython className={styles.icon} />
                                <span>Python</span>
                            </div>
                            <div className={styles.skillCard}>
                                <FaJs className={styles.icon} />
                                <span>JavaScript</span>
                            </div>
                            <div className={styles.skillCard}>
                                <SiCplusplus className={styles.icon} />
                                <span>C++</span>
                            </div>
                            <div className={styles.skillCard}>
                                <FaCode className={styles.icon} />
                                <span>C#</span>
                            </div>
                        </div>
                    </div>

                    {/* Block 2: Full Stack Web */}
                    <div className={styles.category}>
                        <h3 className={styles.categoryTitle}>&gt; Web_Architecture</h3>
                        <div className={styles.skillsGrid}>
                            <div className={styles.skillCard}>
                                <FaReact className={styles.icon} />
                                <span>React</span>
                            </div>
                            <div className={styles.skillCard}>
                                <FaNodeJs className={styles.icon} />
                                <span>Node.js</span>
                            </div>
                            <div className={styles.skillCard}>
                                <SiExpress className={styles.icon} />
                                <span>Express</span>
                            </div>
                            <div className={styles.skillCard}>
                                <SiFastapi className={styles.icon} />
                                <span>FastAPI</span>
                            </div>
                            <div className={styles.skillCard}>
                                <SiVite className={styles.icon} />
                                <span>Vite</span>
                            </div>
                            <div className={styles.skillCard}>
                                <TbApi className={styles.icon} />
                                <span>REST APIs</span>
                            </div>
                        </div>
                    </div>

                    {/* Block 3: AI & Machine Learning */}
                    <div className={styles.category}>
                        <h3 className={styles.categoryTitle}>&gt; AI_&_Machine_Learning</h3>
                        <div className={styles.skillsGrid}>
                            <div className={styles.skillCard}>
                                <SiTensorflow className={styles.icon} />
                                <span>TensorFlow</span>
                            </div>
                            <div className={styles.skillCard}>
                                <SiKeras className={styles.icon} />
                                <span>Keras</span>
                            </div>
                            <div className={styles.skillCard}>
                                <SiOpencv className={styles.icon} />
                                <span>OpenCV</span>
                            </div>
                            <div className={styles.skillCard}>
                                <FaNetworkWired className={styles.icon} />
                                <span>CNNs</span>
                            </div>
                        </div>
                    </div>

                    {/* Block 4: Data & Infrastructure */}
                    <div className={styles.category}>
                        <h3 className={styles.categoryTitle}>&gt; Data_&_Infrastructure</h3>
                        <div className={styles.skillsGrid}>
                            <div className={styles.skillCard}>
                                <SiPostgresql className={styles.icon} />
                                <span>PostgreSQL</span>
                            </div>
                            <div className={styles.skillCard}>
                                <SiMongodb className={styles.icon} />
                                <span>MongoDB</span>
                            </div>
                            <div className={styles.skillCard}>
                                <SiMysql className={styles.icon} />
                                <span>MySQL</span>
                            </div>
                            <div className={styles.skillCard}>
                                <FaGithub className={styles.icon} />
                                <span>GitHub</span>
                            </div>
                            <div className={styles.skillCard}>
                                <FaGitAlt className={styles.icon} />
                                <span>Git</span>
                            </div>
                            <div className={styles.skillCard}>
                                <SiPostman className={styles.icon} />
                                <span>Postman</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;