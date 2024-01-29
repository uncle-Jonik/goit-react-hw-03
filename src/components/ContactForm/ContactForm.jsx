import css from './ContactForm.module.css';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const ContactForm = ({ onAdd }) => {
  const lableName = useId();
  const lableNumber = useId();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(value, actions) => {
        onAdd({ id: nanoid(), ...value });
        actions.resetForm();
      }}
    >
      <Form className={css.formicForm}>
        <label htmlFor={lableName}>Name:</label>
        <Field type="text" id={lableName} name="name" />

        <label htmlFor={lableNumber}>Number:</label>
        <Field type="text" id={lableNumber} name="number" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
