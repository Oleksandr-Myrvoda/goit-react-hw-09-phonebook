import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { contactsOperations } from "../../redux";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const updateName = (event) => {
    setName(event.target.value);
  };

  const [number, setNumber] = useState("");
  const updatePassword = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(contactsOperations.addContact({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.formLabel}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={updateName}
          className={styles.input}
        />
      </label>

      <label className={styles.formLabel}>
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          value={number}
          onChange={updatePassword}
          className={styles.input}
        />
      </label>

      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
}
