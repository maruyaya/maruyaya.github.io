import styles from './home.module.css'
import { useState, useEffect } from 'react'
import biopic from '../../../public/images/biopic.png'
export default function Home() {
    const [words] = useState(["Data Enthusiast", "Boba Enjoyer", "Lifelong Learner", "Cat Lover","Data Enthusiast", "Boba Enjoyer", "Lifelong Learner", "Cat Lover"])
    const [index, setIndex] = useState(0);
    const [animate, setAnimate] = useState(true)

    useEffect (() => {
        const interval = setInterval(() => {
            setIndex((prev) => {
                if (prev >= words.length) {
                    setAnimate(false);
                    return 0;
                }
                setAnimate(true);
                return prev + 1;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);
    
    return (
    <div id='Home'> 
        <div className={styles.titlecontainer}>
            <div className={styles.bg}></div>
            <div className={styles.wrapper}>
                <br/>
                <br/>
                <h1 className={styles.title}>Hello! I'm Rio</h1>
                <div className={styles.dynamictexts}>
                    <div className={styles.textwrapper} style={{transform: `translateY(-${index * 2.5}em)`}}>
                        {words.map((word, index) => (
                            <div key={index} className={styles.text}>
                                {word}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.hometext}>
            <h1 className={styles.title2}>A little about me...</h1>
            
            <div className={styles.biobody}>
                <p className={styles.bio}>I’m a data science major at 
                    Simon Fraser University eager to gain more experience 
                    as a data analyst, and future data scientist. 
                    My goal is to be able to help others with the power of data! 
                    During my free time, you can find me getting hotpot with friends 
                    (Big Way and Pot Empire are my second home) or daydreaming about my 
                    next big trip! 
                    <br/><br/>
                    I love to learn and believe growth doesn't stop 
                    after school. One of my favourite hobbies is journalling. I love to collect pieces of memories throughout my life and creating spreads that I can look back on. 
                    My portfolio is a way to showcase my personality along with my academic and personal projects.
                    Feel free to explore some of my projects! 
                </p>
                <div className={styles.biopicContainer}>
                    <img className={styles.biopic} src={biopic} alt="bio photo of me" />
                </div>
            </div>
        </div>
    </div>
    )
}