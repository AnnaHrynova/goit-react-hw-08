import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { HiUser, HiPhone } from "react-icons/hi2";
import css from "./Contact.module.css";

export default function Contact({ data }){
    const dispatch = useDispatch();

    if (!data) {
      return null; 
    }
  
    const { id, name, number } = data;

  return (
    <div className={css.contactCard}>
      <div className={css.contactInfo}>
        <div className={css.nameWrap}>
        <HiUser size={"18px"} title="contact icon" />
        <p className={css.cardText}>{name}</p>
        </div>
        <div className={css.phoneWrap}>
        <HiPhone size={"18px"} title="phone icon" />
        <p className={css.cardText}>{number}</p>
        </div>
      </div>
      <button
        className={css.deleteBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
}