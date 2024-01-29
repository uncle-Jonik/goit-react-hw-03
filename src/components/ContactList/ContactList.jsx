import css from './ContactList.module.css';
import { Contact } from '../Contact/Contact';

export const ContactList = ({ constctsList, onDelete }) => {
  return (
    <ul className={css.list}>
      {constctsList.map(item => {
        return (
          <li className={css.listItems} key={item.id}>
            <Contact name={item.name} phone={item.number} deleteUsers={() => onDelete(item.id)} />
          </li>
        );
      })}
    </ul>
  );
};
