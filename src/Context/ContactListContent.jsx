import { createContext, useEffect, useState } from "react";
import { getAllContacts } from "../services/contactService";


//Creamos el contexto
export const ContactListContext = createContext(
    //Buena practica
    //Pasar un objeto con los valores por defecto que proveera tu contexto
    {
        contactList: [],
        isContactListLoading: false
    }
)

//Crear el proveedor de contexto
const ContactListContextProvider = (props) => {
    const [contactList, setContactList] = useState([])
    const [isContactListLoading, setIsContactListLoading] = useState(false)

    const loadContactList = () => {
        //Cuando carguemos la lista de contactos, cambiamos el estado de cargando
        setIsContactListLoading(true)

        setTimeout(
            () => {
                const contact_list_response = getAllContacts()
                setContactList(contact_list_response)
                setIsContactListLoading(false)
            },
            2000
        )
    } 

    useEffect(
        () => {
            loadContactList()
        },
        //Si el efecto no tiene dependencia SOLO SE EJECUTARA 1 VEZ
        []
    )

    return (
        <ContactListContext.Provider
            value={
                {
                    contactList: contactList,
                    isContactListLoading: isContactListLoading
                }
            }
        >
            {/* Proveemos a todos los hijos de nuestro componente */}
            {props.children}
        </ContactListContext.Provider>
    )
}

export default ContactListContextProvider

//REDUX = context