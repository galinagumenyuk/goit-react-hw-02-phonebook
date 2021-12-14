import React from "react";
import Item from "./Item";

const Contacts = ({ contacts }) => {
       return <ul>
            {contacts.map(contact => (
                <Item key={contact.id} name={contact.name}/>
             ))}
        </ul>
 }

export default Contacts;