import React from 'react'
import { useState } from 'react'
const data = {
    "Experience":"2+ year of working",
    "Projects": "10+ Projects",
    "Skills": ["React", "Angular", "NodeJS"],
    "Description":"The href attribute requires a valid value to be accessible. Provide a valid, navigable add ress as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles."
}




const About = () => {
    
const [experience, SetExprience] = useState(data["Experience"]);
const [projects, setProjects] = useState(data["Projects"]);
const [skills, setSkills] =  useState(data["Skills"]);
const [description, setDescription] = useState(data["Description"]);
  return (
    <section id='About'>
        <p>Get To Know</p>
        <h1>About Me</h1>
        <p>{description}</p>
    </section>
  )
}

export default About