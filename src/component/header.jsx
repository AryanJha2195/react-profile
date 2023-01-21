import React from 'react'
import { useState } from 'react';
const data = {
    "Name": "Aryan Jha",
    "CV_Link": "www.google.com",
    "Socials": [{ "Social": "Linkedin", "Link": "www.google.com" }, { "Social": "GitHub", "Link": "www.google.com" }],
    "Email": "xyz@abc.com",
    "Phone": "+919988776655"
}
const Header = () => {
    const [name, SetName] = useState(data["Name"]);
    const [cv_link, setCV_Link] = useState(data["CV_Link"]);
    const [socials, setSocials] = useState(data["Socials"]);
    const [email, setEmail] = useState(data["Email"]);
    const [phone, setPhone] = useState(data["Phone"]);
    return (
        <>
            <h1>This change was done to see the CI\CD Pipeline</h1>
            {socials.map((link) => {
                return <div key={link["Social"]}>
                    <div>{link["Social"]}</div>
                    <div>{link["Link"]}</div>
                </div>
            })}
        </>
    )
}

export default Header