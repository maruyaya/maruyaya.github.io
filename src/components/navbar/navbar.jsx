import { Link } from 'react-scroll'
import styles from './navbar.module.css'

export default function Navbar() {
    return (
        <div className= {styles.navbar}>
            <div className={styles.navlogo}></div>
            <ul className ={styles.navlinks}>
                <li><Link to='Home' className={styles.link}>Home</Link></li>
                <li><Link to='Projects' className={styles.link}>Projects</Link></li>
                <li><Link to='Skills' className={styles.link}>Skills</Link></li>
                <li><Link to='Socials' className={styles.link}>Socials</Link></li>
            </ul>
        </div>
    )
}