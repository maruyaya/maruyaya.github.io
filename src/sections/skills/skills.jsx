import styles from './skills.module.css'

const skills = [
    {
        skill: "R code",
        image: "public/skills_images/R.png"
    },
    
    {
        skill: "sql",
        image: "public/skills_images/sql.png"
    },

    {
        skill: "react.js",
        image: "public/skills_images/react.png"
    },

    {
        skill: "python",
        image: "public/skills_images/python.png"
    },

    {
        skill: "figma",
        image: "public/skills_images/figma.png"
    },

    {
        skill: "slack",
        image: "public/skills_images/slack.png"
    },

    {
        skill: "github",
        image: "public/skills_images/github.png"
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