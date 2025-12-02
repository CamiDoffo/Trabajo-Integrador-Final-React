import React, { useState } from 'react'
import '../Navbar/Navbar.css'
import '../ContactList/ContactList.css'
import ICONS from '../../constants/icons'
import './ContactBar.css'
import { Link } from 'react-router'

const ContactBar = ({ contact }) => {
    return (
        <div className='navbar-container'>
            <header className='navbar-header'>
                
                <div className='contact-info'>
                    <Link 
                    to={'/'}
                    className={`links cross`}>
                    <ICONS.Cross/>
                    </Link>
                    <img src={contact.profile_img} className='profile_img' alt={contact.name} />
                    <h3>{contact.name}</h3>
                </div>
                <ICONS.Menu/>
            </header>
        </div>
    )
}

export default ContactBar