import styles from './home.module.css'
import { useState, useEffect } from 'react'

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

            <p className={styles.bio}>I’m a data science major at 
                Simon Fraser University eager to gain more experience 
                as a data analyst, and future data scientist. 
                My goal is to be able to help others with the power of data! 
                During my free time, you can find me getting hotpot with friends 
                (Big Way and Pot Empire are my second home) or daydreaming about my 
                next big trip! 
                <br/><br/>
                I love to learn and believe growth doesn't stop 
                after school. While I have many side hobbies like journalling and
                making keychains, my main focus right now is to learn Chinese and to try
                to build a stronger understanding of investing and expanding my financial literacy. 
                My portfolio is a way to showcase my personality along with my academic and personal projects.
                Feel free to explore some of my projects! 
            </p>
        </div>
    </div>
    )
}