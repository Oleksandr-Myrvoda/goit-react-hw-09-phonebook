import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux";
import styles from "./ContactList.module.css";

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  const deleteContact = (id) => dispatch(contactsOperations.deleteContact(id));

  return (
    <ul className={styles.list}>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={styles.item}>
          <p>
            {name}: {number}
            <button
              type="button"
              className={styles.button}
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </p>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
