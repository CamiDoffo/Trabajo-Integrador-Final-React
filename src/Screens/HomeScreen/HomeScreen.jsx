
import React, { useContext } from 'react'
import ContactList from '../../Components/ContactList/ContactList'

const HomeScreen = () => {
  return (
    <div>
        <div className='contact-list'>
            <ContactList/>
        </div>
        <div>
            <span>Aun no has seleccionado ningun contacto</span>
        </div>
    </div>
  )
}

export default HomeScreen