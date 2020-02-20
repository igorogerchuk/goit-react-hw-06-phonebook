import React, { useMemo, useContext, useEffect } from "react";
import localStorageHandler from "../services/localStorageHandler";
import { Context } from "../services/Store";

const ContactList = ({ filter }) => {
  const [contacts, dispatch] = useContext(Context);

  useEffect(() => {
    localStorageHandler.save("yourContacts", contacts);
  }, [contacts]);

  const filteredContacts = useMemo(
    () =>
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
      ),
    [contacts, filter]
  );

  const removeContact = contactId => {
    dispatch({ type: "removeContact", payload: { contactId } });
  };

  return (
    <>
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
    </>
  );
};

export default ContactList;
