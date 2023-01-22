import React from 'react';
import './header.css'
import { useState } from 'react';
import { getSocialIcon } from '../../utils/sharedUtils'
const data = {
    "Name": "Aryan Jha",
    "Job_Title": "Front End Developer",
    "CV_Link": "https://www.google.com",
    "Socials": [{ "Social": "Linkedin", "Link": "www.google.com" }, { "Social": "GitHub", "Link": "www.google.com" }],
    "Email": "xyz@abc.com",
    "Phone": "+919988776655"
}
const Header = () => {
    const [name, SetName] = useState(data["Name"]);
    const [job, SetJob] = useState(data["Job_Title"]);
    const [cv_link, setCV_Link] = useState(data["CV_Link"]);
    const [socials, setSocials] = useState(data["Socials"]);
    const [email, setEmail] = useState(data["Email"]);
    const [phone, setPhone] = useState(data["Phone"]);
    return (
        <>
            <section id="header" className='header'>
                <div className="heading center">
                    <p>Hi I'm</p>
                    <h1>{name}</h1>
                    <p>{job}</p>
                </div>
                <div className='header-links center'>
                    <a href={cv_link} className="hl"><button className='btn btn-transparent'>Download CV</button></a>
                    <a href='#contact' className="hl"><button className='btn'>Contact Me</button></a>
                </div>
                <div className='social-row'>
                    <div className='socials'>
                        {socials.map((social) => {
                            return <a className='social-icon' key={social["Link"]} href={social["Link"]}>{getSocialIcon(social["Social"])}</a>
                        })}
                    </div>
                    <div className="profileimage">
                        <img src={process.env.PUBLIC_URL + '/images/person.png'} alt="" className="image" />
                    </div>
                    <div className='socials'>
                        <h5 className='Next-Section'>Scroll Down</h5>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header