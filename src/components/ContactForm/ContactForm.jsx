import React from "react";
import { Formik, Form, Field } from "formik";

const ContactForm = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <Field type="text" name="username" />
        <Field type="email" name="number" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
