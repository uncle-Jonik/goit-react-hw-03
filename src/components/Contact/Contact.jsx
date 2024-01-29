import css from './Contact.module.css';

export const Contact = ({ name, phone, deleteUsers }) => {
  return (
    <>
      <h2>{name}</h2>
      <a href={`tel:${phone.split('-').join('')}`}>{phone}</a>
      <button onClick={deleteUsers}>Delete</button>
    </>
  );
};
