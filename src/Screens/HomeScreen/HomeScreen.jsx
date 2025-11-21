
import React, { useContext } from 'react'
import ContactList from '../../Components/ContactList/ContactList'
import Navbar from '../../Components/Navbar/Navbar'
import './HomeScreen.css'

const HomeScreen = () => {
  return (
    <div className='home-screen'>
        <div className='contact-list'>
            <Navbar/>
            <ContactList/>
        </div>
        <div className='home-screen__messages-container'>
            <span>Aun no has seleccionado ningun contacto</span>
        </div>
    </div>
  )
}

export default HomeScreen