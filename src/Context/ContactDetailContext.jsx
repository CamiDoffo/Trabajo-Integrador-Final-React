import { createContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import { getContactById } from "../services/contactService";

export const ContactDetailContext = createContext({
    isContactDetailLoading: false,
    contactDetailed: null,
    onCreateNewMessage: () => {}
});

const ContactDetailContextProvider = () => {
    const [isContactDetailLoading, setIsContactDetailLoading] = useState(false);
    const [contactDetailed, setContactDetailed] = useState(null);

    const { id_contacto } = useParams();

    function loadContactById(contact_id) {
        setIsContactDetailLoading(true);

        setTimeout(() => {
            const contact = getContactById(contact_id);
            setContactDetailed(contact);
            setIsContactDetailLoading(false);
        }, 2000);
    }

    useEffect(() => {
        loadContactById(id_contacto);
    }, [id_contacto]);

    // 👉 SIEMPRE usar prev => {...}
    const sendAutomaticMessage = () => {
        setContactDetailed(prev => {
            if (!prev) return prev;

            const now = new Date();
            const autoMsg = {
                id: prev.messages.length + 1,
                content: "Tu mensaje fue recibido",
                author: prev.name,
                timestamp: now.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                })
            };

            return {
                ...prev,
                messages: [...prev.messages, autoMsg]
            };
        });
    };

    const onCreateNewMessage = (new_message) => {
        setContactDetailed(prev => {
            if (!prev) return prev;

            const now = new Date();
            const userMsg = {
                id: prev.messages.length + 1,
                content: new_message,
                author: "YO",
                timestamp: now.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                })
            };

            return {
                ...prev,
                messages: [...prev.messages, userMsg]
            };
        });

        // Respuesta automática 2 segundos después
        setTimeout(sendAutomaticMessage, 2000);
    };

    return (
        <ContactDetailContext.Provider
            value={{
                isContactDetailLoading,
                contactDetailed,
                onCreateNewMessage
            }}
        >
            <Outlet />
        </ContactDetailContext.Provider>
    );
};

export default ContactDetailContextProvider;
