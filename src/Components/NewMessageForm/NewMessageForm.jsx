import React, { useContext } from 'react'
import { ContactListContext } from '../../Context/ContactListContext'

const NewMessageForm = (props) => {
    console.log(useContext(ContactListContext))
    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target
        const message_value = form.mensaje.value

        props.onCreateNewMessage(
            message_value
        )
    }

    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor="mensaje">Enviar mensaje:</label>
            <textarea id='mensaje' name='mensaje'  />
            <button>Enviar mensaje</button>
        </form>

    )
}

export default NewMessageForm