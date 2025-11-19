import React, { useContext } from 'react'
import { getAllContacts } from '../../services/contactService'
import { Link } from 'react-router'
import { ContactListContext } from '../../Context/ContactListContext'
import WhatsAppSpinner from '../WhatsappSpinner/WhatsappSpinner'
import ICONS from '../../constants/icons'


const ContactList = () => {
    //useContext es un hook nativo de react que me permite consumir contextos
    const { contactList, isContactListLoading } = useContext(ContactListContext)

    return (
        <div>
            {
                isContactListLoading
                    ? <WhatsAppSpinner />
                    : contactList.map(
                        (contact) => {
                            return <ContactItem
                                contact={contact}
                                key={contact.id}
                            />
                        }
                    )
            }

        </div>
    )
}

const ContactItem = (props) => {
    const contact = props.contact
    return (
        <Link to={'/contacto/' + contact.id} >
            <h2>{contact.name} <ICONS.Android className='android-icon' /> <ICONS.CodeIgniter/> <ICONS.Github/></h2>
            <span>En linea: {contact.is_connected ? 'Si' : 'No'}</span>
            <img src={contact.profile_img} width={'150px'} />
            <hr />
        </Link>
    )
}

export default ContactList