import styles from './Projects.module.css';
import { FaGithub, FaExternalLinkAlt, FaTerminal } from 'react-icons/fa';
import projectsData from '../../data/projects.json';

const Projects = () => {
    return (
        <section id="projects" className={styles.projectsSection}>
            <div className={styles.container}>
                
                <h2 className={styles.title}>
                    Deployed <span>Systems</span>
                </h2>
                
                {/* Mobile-only swipe hint */}
                <p className={styles.swipeHint}>Swipe to explore &rarr;</p>

                <div className={styles.projectGrid}>
                    {projectsData.map((project) => (
                        <div key={project.id} className={styles.card}>
                            
                            <div className={styles.cardInner}>
                                <div className={styles.cardHeader}>
                                    <FaTerminal className={styles.folderIcon} />
                                    <div className={styles.links}>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                                            <FaGithub className={styles.linkIcon} />
                                        </a>
                                        {project.demo !== "#" && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                                                <FaExternalLinkAlt className={styles.linkIcon} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDesc}>{project.description}</p>
                            </div>

                            <div className={styles.tags}>
                                {project.tags.map((tag, i) => (
                                    <span key={i} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                            
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;