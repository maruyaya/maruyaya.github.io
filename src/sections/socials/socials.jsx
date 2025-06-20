import styles from "./socials.module.css"

export default function Socials() {

    const socials = [
        {
            name: "email icon",
            link: "mailto:rma140@sfu.ca",
            image: "/socials_images/mail.png"
        },

        {
            name: "linkedin icon",
            link: "https://www.linkedin.com/in/rio-maruyama/",
            image: "/socials_images/linkedin.png"
        },

        {
            name: "instagram icon",
            link: "https://www.instagram.com/mysoneiji/",
            image: "/socials_images/instagram.png"
        },

        {
            name: "github icon",
            link: "https://github.com/maruyaya/",
            image: "/socials_images/github.png"
        }
    ];


    return (
    <div id='Socials'>
        <h1 className={styles.title}>Socials</h1>
        <p className={styles.text}>I'm always open to connect and make new friends! Let's chat {":)"}</p>
        <div className={styles.socialscontainer}>
            {socials.map((social, index) => (
                <a key= {index} href={social.link}  target="_blank" rel="noopener noreferrer">
                    <img src={social.image} alt={social.name} className={styles.image}></img>
                </a>
            ))}
        </div>
    </div>
    )
}