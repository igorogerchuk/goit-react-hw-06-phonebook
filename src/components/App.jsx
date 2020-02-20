import React, { useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Store from "../services/Store";

const App = () => {
  const [filter, setFilter] = useState("");

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  return (
    <Store>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <input type="text" value={filter} onChange={changeFilter} />
      <ContactList filter={filter} />
    </Store>
  );
};

export default App;
