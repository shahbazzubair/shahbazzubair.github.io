import styles from './Experience.module.css';
import experienceData from '../../data/experience.json'; 

const Experience = () => {
    return (
        <section id="experience" className={styles.experienceSection}>
            <div className={styles.container}>
                
                <h2 className={styles.title}>
                    Work <span>Experience</span>
                </h2>

                <div className={styles.list}>
                    {experienceData.map((job) => (
                        <div key={job.id} className={styles.card}>
                            
                            <div className={styles.header}>
                                <div>
                                    <h3 className={styles.role}>{job.role}</h3>
                                    <span className={styles.company}>{job.company}</span>
                                </div>
                                {/* Date moved up to save vertical space */}
                                <span className={styles.date}>{job.date}</span>
                            </div>

                            <ul className={styles.descriptionList}>
                                {job.description.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Experience;