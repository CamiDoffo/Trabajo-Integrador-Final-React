import React, { useState } from 'react'
import '../Navbar/Navbar.css'
import '../ContactList/ContactList.css'
import ICONS from '../../constants/icons'
import './ContactBar.css'

const ContactBar = ({ contact }) => {
    return (
        <div className='navbar-container'>
            <header className='navbar-header'>
                <div className='contact-info'>
                    <img src={contact.profile_img} className='profile_img' alt={contact.name} />
                    <h3>{contact.name}</h3>
                </div>
                <ICONS.Menu/>
            </header>
        </div>
    )
}

export default ContactBar