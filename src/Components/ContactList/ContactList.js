import React from "react";
import PropTypes from "prop-types";
import ContactItem from "../ContactItem";
import styles from "./ContactList.module.css";

export default function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={styles.contacts__list}>
      {contacts.map(({ name, number, id }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          id={id}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.object,
  deleteContact: PropTypes.func,
};
