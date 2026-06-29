import { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Initiating handshake...");
        const formData = new FormData(event.target);

        // Your Web3Forms Access Key
        formData.append("access_key", "f6094f63-f1a3-4c16-b6e5-03562a3ef9d4");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("> Message transmitted successfully.");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(`> Error: ${data.message}`);
        }
    };

    return (
        <section id="contact" className={styles.contactSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Initialize <span>Contact</span>
                </h2>
                
                <div className={styles.formWrapper}>
                    <form onSubmit={onSubmit} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="name" className={styles.label}>&gt; Name</label>
                            <input type="text" name="name" id="name" required className={styles.input} placeholder="Enter your name..."/>
                        </div>
                        
                        <div className={styles.inputGroup}>
                            <label htmlFor="email" className={styles.label}>&gt; Email</label>
                            <input type="email" name="email" id="email" required className={styles.input} placeholder="your.email@domain.com"/>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="message" className={styles.label}>&gt; Payload</label>
                            <textarea name="message" id="message" required className={styles.textarea} placeholder="Enter your message here..."></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn}>[ Send_Message ]</button>
                        {result && <p className={styles.resultMsg}>{result}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;