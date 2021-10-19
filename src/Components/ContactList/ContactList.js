import React from "react";
import ContactItem from "../ContactItem";
import styles from "./ContactList.module.css";

function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={styles.contacts__list}>
      {contacts.map(({ name, number, id }) => (
        <ContactItem
          name={name}
          number={number}
          id={id}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
}

export default ContactList;
