import React from 'react';
import { useState } from 'react';
import './nav.css'

import { FaHome, FaAddressBook } from 'react-icons/fa';
import { IoHomeOutline } from 'react-icons/io5';
import { SiAboutdotme } from 'react-icons/si';
import { BsGear } from 'react-icons/bs';
import { RiPagesLine } from 'react-icons/ri';
import { AiOutlineContacts } from 'react-icons/ai'

const Nav = () => {
    const [Selection, setSelection] = useState("#")
    return (
        <nav>
            <div className='nav'>
                <a className={Selection=="#"?"active":""} href="#" onClick={()=>setSelection("#")}><IoHomeOutline /></a>
                <a className={Selection=="#About"?"active":""} href="#About" onClick={()=>setSelection("#About")}><SiAboutdotme /></a>
                <a className={Selection=="#Experience"?"active":""} href="#Experience" onClick={()=>setSelection("#Experience")}><BsGear /></a>
                <a className={Selection=="#Portfolio"?"active":""} href="#Portfolio" onClick={()=>setSelection("#Portfolio")}><RiPagesLine></RiPagesLine></a>
                <a className={Selection=="#Contact"?"active":""} href="#Contact" onClick={()=>setSelection("#Contact")}><AiOutlineContacts /></a>
            </div>
        </nav>
    )
}

export default Nav