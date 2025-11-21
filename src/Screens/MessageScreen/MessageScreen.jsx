import React, { useContext, useEffect, useState } from 'react'
import MessagesList from '../../Components/MessagesList/MessagesList'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
import Navbar from '../../Components/Navbar/Navbar'
import { useParams } from 'react-router'
import { getContactById } from '../../services/contactService'
import ContactList from '../../Components/ContactList/ContactList'
import './messageScreen.css'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import WhatsAppSpinner from '../../Components/WhatsappSpinner/WhatsappSpinner'
import SearchBar from '../../Components/SearchBar/SearchBar'
import ContactBar from '../../Components/ContactBar/contactBar'

function MessageScreen() {
    
    
    const {isContactDetailLoading, contactDetailed, onCreateNewMessage} = useContext(ContactDetailContext)


    return (
        <div className='message-screen'>
            <div className='message-screen__contact-list-container'>
                <Navbar/>
                <ContactList/>
            </div>
            <div className='message-screen__messages-container'>
                {
                    isContactDetailLoading 
                    ? <WhatsAppSpinner/>
                    : (
                        contactDetailed 
                        ? (
                            contactDetailed.messages
                            ?
                            <>
                                <ContactBar
                                    contact={contactDetailed}
                                />
                                <MessagesList 
                                    messages={contactDetailed.messages} 
                                />
                            </>
                            : 
                            <>
                                <ContactBar
                                    contact={contactDetailed}
                                />
                                <span>Chat Vacío</span>
                            </>
                        )
                        : <span>Contacto no encontrado</span>
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


