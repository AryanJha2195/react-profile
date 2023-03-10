import React from 'react'
import { useState } from 'react'
import './about.css'
import 'react-icons/fa' 
import { FaBrush, FaGit, FaTimes } from 'react-icons/fa'
const data = {
  "Experience": "2+ year of working",
  "Projects": "10+ Projects",
  "Skills": ["React", "Angular", "NodeJS"],
  "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nobis! Nulla, aspernatur iure. Fugit asperiores nobis tempora voluptatum, ex explicabo eos possimus culpa magni, nulla ipsam facilis inventore nihil voluptatem est obcaecati quae in ipsa voluptatibus, autem tempore officiis? Maxime, dolorum! Optio, architecto. Doloremque, illo?"
}




const About = () => {

  const [experience, SetExprience] = useState(data["Experience"]);
  const [projects, setProjects] = useState(data["Projects"]);
  const [skills, setSkills] = useState(data["Skills"]);
  const [description, setDescription] = useState(data["Description"]);
  return (
    <section id='About'>
      <div className="title">
        <span>Get To Know</span>
        <h1>About Me</h1>
      </div>


      <div className='container1'>


        <div className='left'>
          <img src={process.env.PUBLIC_URL + '/images/person.webp'} alt="404 NOT FOUND" className="sideimg" />
        </div>


        <div className='right'>
          <div className='cards'>
            <div className="card">Experience<FaTimes/></div>
            <div className="card">Projects<FaGit/></div>
            <div className="card">Skills<FaBrush/></div>
          </div>

          <div className='aboutmecontent'>
            <p>{description}</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About