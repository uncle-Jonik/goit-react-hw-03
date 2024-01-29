import css from './Contact.module.css';
import { FaRegTrashCan } from 'react-icons/fa6';
import { IoIosCall } from 'react-icons/io';

export const Contact = ({ name, phone, deleteUsers }) => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>{name}</h2>
      <div className={css.callBox}>
        <IoIosCall className={css.telIcon} />
        <a href={`tel:${phone.split('-').join('')}`} className={css.link}>
          {phone}
        </a>
      </div>

      <button className={css.addButton} onClick={deleteUsers}>
        <FaRegTrashCan />
      </button>
    </div>
  );
};
