import React from "react";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
            id={contact.id}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
