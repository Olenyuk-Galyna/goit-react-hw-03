import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactForm from "./сomponents/ContactForm/ContactForm";
import SearchBox from "./сomponents/SearchBox/SearchBox";
import numberContactData from "./numberContact.json";
import { nanoid } from "nanoid";
import ContactList from "./сomponents/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifiedName = localStorage.getItem("contacts");
    const parsedName = JSON.parse(stringifiedName) ?? numberContactData;
    return parsedName;
  });

  useEffect(() => {
    const stringifiedName = JSON.stringify(contacts);
    localStorage.setItem("contacts", stringifiedName);
  }, [contacts]);

  const [filter, setFilter] = useState("");

  const addContact = (formData) => {
    const finalName = {
      ...formData,
      id: nanoid(),
    };
    setContacts((prevContact) => {
      return [...prevContact, finalName];
    });
  };

  const deleteContact = (nameId) => {
    setContacts((prevContact) => {
      return prevContact.filter((contact) => contact.id !== nameId);
    });
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
      contact.number.includes(filter.trim())
  );
  console.log(contacts);
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={filteredContacts} onDelete={deleteContact} />
      </div>
    </>
  );
}

export default App;
