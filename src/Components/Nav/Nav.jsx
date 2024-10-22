import React, { useState } from 'react'
import logo from '../../assets/images/logo.svg'
import { PiPhoneCallFill } from "react-icons/pi";
import { FaTelegramPlane } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import { MdClose } from "react-icons/md";
const Nav = () => {

    const [active, setActive] = useState(false)
    return (
        <>
            <div className="container">
                <nav className='nav'>
                    <div className="nav_container">
                        <div className="nav_box">
                            <a href="#" className="nav_logo">
                                <img src={logo} alt="Logo" />
                            </a>
                            <ul className={`nav_list ${active && 'active'}`}>
                                <MdClose className='nav_close' onClick={() => setActive(false)} />
                                <a href="#" className="nav_logo active2">
                                    <img src={logo} alt="Logo" />
                                </a>
                                <li>
                                    <a href="#" className="nav_link">Aksiyalar</a>
                                </li>
                                <li>
                                    <a href="#" className="nav_link">Sotib olish usullari</a>
                                </li>
                                <li>
                                    <a href="#" className="nav_link">Xaridorlar uchun</a>
                                </li>
                                <li>
                                    <a href="#" className="nav_link">Kompaniya haqida</a>
                                </li>
                                <div className="nav_contacts active2">
                                    <a href="#" >
                                        <FaTelegramPlane className="nav_telegram" />
                                    </a>
                                    <a href="tel:1361" className="nav_phone_box">
                                        <PiPhoneCallFill className='nav_phone' />
                                        <p>1361</p>
                                    </a>
                                </div>
                            </ul>
                            <div className="nav_contacts active1">
                                <a href="#" >
                                    <FaTelegramPlane className="nav_telegram" />
                                </a>
                                <a href="tel:1361" className="nav_phone_box">
                                    <PiPhoneCallFill className='nav_phone' />
                                    <p>1361</p>
                                </a>
                            </div>
                            <SlMenu className='nav_menu' onClick={() => setActive(true)} />
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Nav
