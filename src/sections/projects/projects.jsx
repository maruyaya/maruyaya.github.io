import styles from './projects.module.css'

export default function Projects() {

    const projects = [
        {
            name: "Find Your Matcha",
            link: "https://github.com/justinnebaltazar/find-your-matcha",
            image: "public/images/project_image/findyourmatcha.png"
        },

        {
            name: "Webscraping Tutorial Article",
            link: "public/project_links/WebscrapingTutorial.pdf",
            image: "public/images/project_image/webscrapetutorial.png"
        }
    ];


    return (
    <div id='Projects'>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.projectcontainer}>
            <div>
                {projects.map((project, index) => (
                    <li key={index} className={styles.project}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <div className={styles.imageContainer}> 
                                <img 
                                src = {project.image} 
                                alt={project.name} 
                                className={styles.projectImage}/>
                            </div>
                        </a>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectName}>{project.name}</a>
                    </li>
                ))}
            </div>
        </div>

    </div>
    )
}