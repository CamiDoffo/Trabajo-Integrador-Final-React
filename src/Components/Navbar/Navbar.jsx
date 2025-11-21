import React, { useState } from 'react'
import './Navbar.css'
import ICONS from '../../constants/icons'

const Navbar = () => {
    return (
        <div className="navbar-container">
            <header className="navbar-header">
                <h2>Mi Chat Clon</h2>
                <nav className='nav-desktop'>
                    <ICONS.Chat />
                    <ICONS.Menu />
                </nav>
            </header>

        </div>
    )
}

export default Navbar