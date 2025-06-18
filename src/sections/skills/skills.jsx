import styles from './skills.module.css'

const skills = [
    {
        skill: "R code",
        image: "/skills_images/R.png"
    },
    
    {
        skill: "sql",
        image: "/skills_images/sql.png"
    },

    {
        skill: "react.js",
        image: "/skills_images/react.png"
    },

    {
        skill: "python",
        image: "/skills_images/python.png"
    },

    {
        skill: "figma",
        image: "/skills_images/figma.png"
    },

    {
        skill: "slack",
        image: "/skills_images/slack.png"
    },

    {
        skill: "github",
        image: "/skills_images/github.png"
    }

];

export default function Skills() {
    return (
    <div id='Skills'>
        <h1 className={styles.title}>Skills</h1>
        <div className={styles.imagecontainer}>
            {skills.map((skill, index) => (
                <img key={index} src={skill.image} alt={skill.skill} className={styles.image} />
            ))}
        </div>
    </div>
    )
}