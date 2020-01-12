import React, { useState, useReducer, useMemo, useEffect } from "react";
import localStorageHandler from "../services/localStorageHandler";
import contactsReducer from "../services/reducer";
import ContactForm from "./ContactForm";

export default function App() {
  const [contacts, dispatch] = useReducer(
    contactsReducer,
    localStorageHandler.get("yourContacts") || []
  );

  useEffect(() => {
    localStorageHandler.save("yourContacts", contacts);
  }, [contacts]);

  const addContact = contact => {
    dispatch({ type: "addContact", payload: { contact } });
  };

  const removeContact = contactId => {
    dispatch({ type: "removeContact", payload: { contactId } });
  };

  const [filter, setFilter] = useState("");

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const filteredContacts = useMemo(
    () =>
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
      ),
    [contacts, filter]
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} contacts={contacts} />

      <h2>Contacts</h2>
      {/* <Filter /> */}

      <input type="text" value={filter} onChange={changeFilter} />
      {/* <ContactList /> */}

      {filteredContacts.length !== 0 && (
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              <span>{contact.name} </span>
              <span>{contact.number}</span>
              <button onClick={() => removeContact(contact.id)}>DELETE</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
