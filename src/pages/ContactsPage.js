import React from "react";
import { useDispatch } from "react-redux";

import { contactsOperations } from "../redux/contacts";

import ContactsForm from "../Components/ContactsForm";
import Filter from "../Components/Filter";
import ContactList from "../Components/ContactList";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const fetchContacts = dispatch(contactsOperations.fetchContacts());

  return (
    <div>
      <h2>Contacts</h2>

      <ContactsForm />

      <Filter />

      <ContactList />
    </div>
  );
};
export default ContactsPage;
