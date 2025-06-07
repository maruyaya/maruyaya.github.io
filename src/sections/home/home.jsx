import styles from './home.module.css'

export default function Home() {
    return (
    <div id='Home'> 
        <div className={styles.bg}></div>
        <h1 className={styles.header}>A little about me...</h1>

        <p>I’m currently a data science major at 
            Simon Fraser University eager to gain more experience 
            as a data analyst, and future data scientist. 
            My goal is to be able to help others with the power of data! 
            <br/><br/>
            During my free time, you can find me getting hotpot with friends 
            (Big Way and Pot Empire are my second home) or daydreaming about my 
            next big trip! I love to learn and believe growth doesn't stop 
            after school! Right now, I'm learning Chinese and trying
            to build a stronger undestanding of the investing world. 
        </p>
    </div>
    )
}