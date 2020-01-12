import React, { useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import Store from "../services/Store";

export default function App() {
  const [filter, setFilter] = useState("");

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  return (
    <Store>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter filter={filter} changeFilter={changeFilter} />
      <ContactList filter={filter} />
    </Store>
  );
}
