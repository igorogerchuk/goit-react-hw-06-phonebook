import React, { useState, useContext } from "react";
import { Context } from "../services/Store";
const uuidv4 = require("uuid/v4");

export default function ContactForm() {
  const [contacts, dispatch] = useContext(Context);

  const [name, setName] = useState("");

  const changeName = e => {
    setName(e.target.value);
  };

  const [number, setNumber] = useState("");

  const changeNumber = e => {
    setNumber(e.target.value);
  };

  const isUniqueName = name => !contacts.find(contact => contact.name === name);

  const addContact = () => {
    const contact = {
      id: uuidv4(),
      name: name,
      number: number
    };

    dispatch({ type: "addContact", payload: { contact } });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!(name && number)) return;

    if (!isUniqueName(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    addContact();

    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" value={name} onChange={changeName} />
      </label>
      <label>
        Number
        <input type="number" value={number} onChange={changeNumber} />
      </label>

      <button type="submit">Add Contact</button>
    </form>
  );
}
