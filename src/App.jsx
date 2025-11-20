import React, { useState } from 'react'
import MessageScreen from './Screens/MessageScreen/MessageScreen'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import './styles/global.css'
import ContactListContextProvider from './Context/ContactListContext'
import ContactDetailContextProvider from './Context/ContactDetailContext'
import Navbar from './Components/Navbar/Navbar'

function App() {
 
  return (
    <div>
      <Navbar/>
      <ContactListContextProvider>
        <Routes>
          <Route 
            path='/' 
            element={ <HomeScreen />}
          />
          <Route 
            element={<ContactDetailContextProvider/>}
          >
            <Route 
              path='/contacto/:id_contacto' 
              element={<MessageScreen />}
            />
          </Route> 
        </Routes>
      </ContactListContextProvider>
     
    </div>
  )
}

export default App


function Button (props){
  return (
    /* Children es una prop reservada que es el contenido hijo del button */
    <button>{props.children}</button>
  )
}

/* EJEMPLO DE USO */

/* 
<Button >
  <span>Button 😎</span>
</Button>
*/