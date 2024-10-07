import React from "react";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ name, number, onDelete, id }) => {
  return (
    <div className={css.tumb}>
      <div className={css.wraper}>
        <IoPerson />
        <p className={css.name}>{name}</p>
      </div>
      <div className={css.wraper}>
        <FaPhone />
        <p className={css.number}>{number}</p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
