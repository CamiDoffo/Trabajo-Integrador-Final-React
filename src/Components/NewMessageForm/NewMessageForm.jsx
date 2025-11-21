import React, { useContext } from 'react'
import { ContactListContext } from '../../Context/ContactListContext'
import ICONS from '../../constants/icons'
import './NewMessageForm.css'

const NewMessageForm = (props) => {
    console.log(useContext(ContactListContext))
    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target
        const message_value = form.mensaje.value

        props.onCreateNewMessage(
            message_value
        )
        form.reset()
    }

    return (

        <form onSubmit={handleSubmit} className='message-form'>
            <textarea id='mensaje' name='mensaje' placeholder='Escribe un mensaje'/>
            <button><ICONS.PaperPlane/></button>
        </form>

    )
    
}

export default NewMessageForm