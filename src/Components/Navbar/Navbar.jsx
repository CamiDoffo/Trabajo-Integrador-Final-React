import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [is_open, setIsOpen] = useState(false)
    const toggleMenu = () =>{
        setIsOpen(!is_open)
    }
  return (
    <header>
        <h2>Mi tienda</h2>
        <nav className='nav-desktop'>
            <a href="">Link 1</a>
            <a href="">Link 2</a>
            <a href="">Link 3</a>
            <a href="">Link 4</a>
        </nav>
        <button 
            className='btn-menu' 
            onClick={toggleMenu}
        >menu</button>

        {
            is_open &&
            <nav className='nav-mobible'>
                <a href="">Link 1</a>
                <a href="">Link 2</a>
                <a href="">Link 3</a>
                <a href="">Link 4</a>
            </nav>
        }
    </header>
  )
}

export default Navbar