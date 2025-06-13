import styles from './projects.module.css'

export default function Projects() {

    const projects = [
        {
            name: "Find Your Matcha",
            link: "https://github.com/justinnebaltazar/find-your-matcha",
            image: "public/project_images/findyourmatcha.png",
            description: `Created a Matcha reviewing platform for UBC's CMD-F hackathon.`
        },

        {
            name: "Webscraping Tutorial Article",
            link: "public/project_links/WebscrapingTutorial.pdf",
            image: "public/project_images/webscrapetutorial.png",
            description: `For my STAT 260 final project, we had to make a 
                            webscraping tutorial for people with minimal technical knowledge.
                            `
        },

                {
            name: "DSSS x SFU AIESEC's Business Hackathon",
            link: "public/project_links/GlobalyticsSlide.pdf",
            image: "public/project_images/Globalytics.png",
            description: `The Data Science Student Society and SFU AIESEC 
            hosted a business hackathon where we came up with solutions on how 
            SFU AIESEC can increase the number of applicants for their exchange program.
            This was a great learning opportunity for my team and I where we got to put our 
            coursework in action.`
        }
    ];


    return (
    <div id='Projects'>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.projectcontainerwrapper}>
            <div className={styles.projectcontainer}>
                {projects.map((project, index) => (
                        <div key={index} className={styles.project}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <div className={styles.imageContainer}> 
                                    <img 
                                    src = {project.image} 
                                    alt={project.name} 
                                    className={styles.projectImage}/>
                                </div>
                            </a>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectName}>{project.name}</a>
                            <p className={styles.description}>{project.description}</p>
                        </div>
                ))}
            </div>
        </div>
        

    </div>
    )
}