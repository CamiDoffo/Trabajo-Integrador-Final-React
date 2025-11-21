import React, { useContext, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router'
import { ContactListContext } from '../../Context/ContactListContext'
import WhatsAppSpinner from '../WhatsappSpinner/WhatsappSpinner'
import SearchBar from '../SearchBar/SearchBar'
import './ContactList.css'

const ContactList = () => {
    const { contactList, isContactListLoading } = useContext(ContactListContext)

    // estado que se mostrará en pantalla
    const [ filtered, setFiltered ] = useState([])

    // cuando carga contactList por primera vez → llenar filtered
    useEffect(() => {
        if (contactList) {
            setFiltered(contactList)
        }
    }, [ contactList ])

    const handleSearch = (text) => {
        const result = contactList.filter(c =>
            c.name.toLowerCase().includes(text)
        )
        setFiltered(result)
    }
    const { id_contacto } = useParams()
    console.log(id_contacto)
    return (
        <div>
            <div className="navbar-search">
                <SearchBar
                    placeholder="Buscar contactos"
                    onSearch={handleSearch}
                />
            </div>

            {isContactListLoading ? (
                <WhatsAppSpinner />
            ) : (
                filtered.map((contact) => (
                    <ContactItem
                        contact={contact}
                        key={contact.id}
                        className='contact-container'
                        selected={Number(id_contacto) === Number(contact.id)}
                    />
                ))
            )}
        </div>
    )
}

const ContactItem = ({ contact, className, selected }) => {
    return (
        <Link
            to={'/contacto/' + contact.id}
            className={`links ${className} ${selected ? "selected" : ""}`}
        >
            <img src={contact.profile_img} className='profile_img' alt={contact.name} />
            <div className='detail-contact'>
                <h3>{contact.name}</h3>
                <span>{contact.is_connected ? 'Online' : 'Left ' + contact.last_time_connected}</span>
            </div>
        </Link>
    )
}

export default ContactList