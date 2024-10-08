import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { ContactFormSchema } from "../../util/Schema";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span className={css.text}>Username</span>
          <Field
            className={css.field}
            type="text"
            name="name"
            placeholder="Galyna Olenyuk"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />
        </label>
        <label className={css.label}>
          <span className={css.text}>Number</span>
          <Field
            className={css.field}
            type="tel"
            name="number"
            placeholder="+38xxxxxxxxxx"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="number"
            component="span"
          />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
