import React from 'react';
import './nav.css'

import { FaHome, FaAddressBook } from 'react-icons/fa';
import { IoHomeOutline } from 'react-icons/io5';
import { SiAboutdotme } from 'react-icons/si';
import { BsGear } from 'react-icons/bs';
import { RiPagesLine } from 'react-icons/ri';
import { AiOutlineContacts } from 'react-icons/ai'

const Nav = () => {
    return (
        <nav>
            <div className='nav'>
                <a className='nav-link' href="#" al><IoHomeOutline /></a>
                <a className='nav-link' href="#About"><SiAboutdotme /></a>
                <a className='nav-link' href="#Experience"><BsGear /></a>
                <a className='nav-link' href="#Portfolio"><RiPagesLine></RiPagesLine></a>
                <a className='nav-link' href="#Contact"><AiOutlineContacts /></a>
            </div>
        </nav>
    )
}

export default Nav