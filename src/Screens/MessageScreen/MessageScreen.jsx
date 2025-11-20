import React, { useContext, useEffect, useState } from 'react'
import MessagesList from '../../Components/MessagesList/MessagesList'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
import Navbar from '../../Components/Navbar/Navbar'
import Counter from '../../Components/Counter/Counter'
import { useParams } from 'react-router'
import { getContactById } from '../../services/contactService'
import ContactList from '../../Components/ContactList/ContactList'
import './messageScreen.css'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import Loader from '../../Components/Loader/Loader'
import WhatsAppSpinner from '../../Components/WhatsappSpinner/WhatsappSpinner'

function MessageScreen() {
    
    
    const {isContactDetailLoading, contactDetailed, onCreateNewMessage} = useContext(ContactDetailContext)


    return (
        <div className='message-screen'>
            <div className='message-screen__contact-list-container'>
                <ContactList/>
            </div>
            <div className='message-screen__messages-container'>
                {
                    isContactDetailLoading 
                    ? <WhatsAppSpinner/>
                    : (
                        contactDetailed 
                        ? <MessagesList 
                            messages={contactDetailed.messages} 
                        />
                        : <span>contacto no encontrado</span>
                    )
                }
                
                <div className='messages-form-container'>
                    <NewMessageForm
                        onCreateNewMessage={onCreateNewMessage}
                    />
                </div>
            </div>
        </div>
    )
}

export default MessageScreen


/* 
 const [isSelect, setIsSelect] = useState(false)

    Cada vez que cambie el id_contacto, buscar el contacto por id
    useEffect nos permite controlar las recargas de una funcion
   
    useEffect(
        //Efecto, ACCION A REALIZAR
        //Cuando se cargue el componente el efecto se ejecutara 1 VEZ
        //SI ALGUN VALOR DE DEPENDENCIA CAMBIA, EL EFECTO SE RE-EJECUTARA
        () => {
            console.log("Cambio el isSelect")
        },
        //Dependencias, que valor estaremos observando para cargar el efecto
        [isSelect]
    )

     <button
                onClick={
                    () => {
                        setIsSelect(!isSelect)
                    }
                }
            >
                {
                    isSelect
                    ? 'Seleccionado'
                    : 'Seleccionar'
                }
            </button>
*/