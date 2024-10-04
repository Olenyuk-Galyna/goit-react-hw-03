import React from "react";
import { Formik, Form, Field } from "formik";

const SearchBox = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <Field type="text" name="find contact by name" />
      </Form>
    </Formik>
  );
};

export default SearchBox;
