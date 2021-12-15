import React from "react";
import Item from "./Item";
import { ContactItem } from "./Contacts.styled";

const Contacts = ({ contacts }) => {
       return <ContactItem>
            {contacts.map(contact => (
                 <Item key={contact.id} name={contact.name} number={contact.number}/>
             ))}
        </ContactItem>
 }

export default Contacts;