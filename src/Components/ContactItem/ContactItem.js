import styles from "./ContactItem.module.css";
export default function ContactItem({ name, number, deleteContact, id }) {
  const { contacts__item, contact__name, contact__number, contacts__btn } =
    styles;
  return (
    <li id={id} className={contacts__item}>
      <p className={contact__name}>{name}</p>
      <p className={contact__number}>tel: {number}</p>
      <button onClick={() => deleteContact(id)} className={contacts__btn}>
        Delete contact
      </button>
    </li>
  );
}
