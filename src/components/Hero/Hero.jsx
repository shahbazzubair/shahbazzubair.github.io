import styles from "./Hero.module.css";
// Adjust this path if your image name/extension is different
import profileImg from "../../assets/Profile Picture.jpg"; 

const Hero = () => {
  return (
    <section id="home" className={styles.heroSection}>
      
      {/* 1. Profile Image with Tech Badges */}
      <div className={styles.profileContainer}>
        <div className={styles.profileImageWrapper}>
            <img 
              src={profileImg} 
              alt="Muhammad Shahbaz" 
              className={styles.profileImage} 
            />
        </div>
        
        {/* Terminal/Code styled Badges */}
        <div className={`${styles.badge} ${styles.badge1}`}>&lt;FullStack/&gt;</div>
        <div className={`${styles.badge} ${styles.badge2}`}>{`{AI_Data}`}</div>
        <div className={`${styles.badge} ${styles.badge3}`}>[Systems]</div>
      </div>

      {/* 2. IT/Terminal Intro Text */}
      <div className={styles.intro}>
        <span className={styles.prompt}>&gt;</span> echo "Hello, I'm"
      </div>
      
      <h1 className={styles.name}>
        Muhammad<br />Shahbaz
      </h1>
      
      {/* 3. Upgraded Enterprise Copy (No Fluff) */}
      <p className={styles.description}>
        Software Engineer focused on building robust web architectures, intelligent data integrations, and scalable enterprise systems. 
      </p>

      {/* 4. Call to Action Buttons */}
      <div className={styles.ctaContainer}>
        <a href="#projects" className={styles.btnPrimary}>View Projects</a>
        <a href="#contact" className={styles.btnSecondary}>Initialize Contact</a>
      </div>

    </section>
  );
};

export default Hero;