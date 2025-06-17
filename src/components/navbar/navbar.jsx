import { Link } from 'react-scroll'
import styles from './navbar.module.css'
import { useState } from 'react'

export default function Navbar() {

    //*change nav colour when scrolling *//
    const [color, setColour] = useState(false)

    const changeColour = () => {
        if (window.scrollY >= document.documentElement.clientHeight*0.7) {
            setColour(true)
        }
        else {
            setColour(false)
        }
    }

    window.addEventListener('scroll', changeColour)

   

    return (
        <div className= {color ? styles['navbarscrolled'] : styles.navbar}>
            <div> 
                <img src= '/images/logo.png' alt= 'logo' className={styles.navlogo}/> 
            </div>
            <ul className ={styles.navlinks}>
                <li><Link to='Home' offset= {-62} className={styles.link}>Home</Link></li>
                <li><Link to='Projects' className={styles.link}>Projects</Link></li>
                <li><Link to='Skills' className={styles.link}>Skills</Link></li>
                <li><Link to='Socials' className={styles.link}>Socials</Link></li>
            </ul>
        </div>
    )
}