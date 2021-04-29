import React from "react";
import styles from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { contactsSelectors, filterContact } from "../../redux";

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);

  const onChange = (event) => dispatch(filterContact(event.target.value));

  return (
    <label className={styles.label}>
      <p className={styles.title}>Filter</p>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </label>
  );
}
