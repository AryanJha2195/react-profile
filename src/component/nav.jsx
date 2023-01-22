import React from 'react';
import {FaHome, FaAddressBook} from 'react-icons/fa';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#"><FaHome/></a>
                    <a href="#About"><FaAddressBook/></a>
                    <a href="#Experience">Experience</a>
                    <a href="#Portfolio">Portfolio</a>
                    <a href="#Contact">Contact Me</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav