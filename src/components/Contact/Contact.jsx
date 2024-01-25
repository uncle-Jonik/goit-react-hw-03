import css from './Contact.module.css';

export const Contact = ({ name, phone }) => {
  return (
    <>
      <h2>{name}</h2>
      <a href={`tel:${phone.split('-').join('')}`}>{phone}</a>
      <button>Delete</button>
    </>
  );
};
