import styles from "./socials.module.css"

export default function Socials() {

    const socials = [
        {
            name: "email",
            link: "mailto:rma140@sfu.ca",
            image: "public/socials_images/mail.png"
        },

        {
            name: "linkedin",
            link: "https://www.linkedin.com/in/rio-maruyama/",
            image: "public/socials_images/linkedin.png"
        },

        {
            name: "instagram",
            link: "https://www.instagram.com/mysoneiji/",
            image: "public/socials_images/instagram.png"
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