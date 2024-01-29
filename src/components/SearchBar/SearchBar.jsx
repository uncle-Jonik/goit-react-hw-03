import { useId } from 'react';
import css from './SearchBar.module.css';

export const SearchBar = ({ onChange }) => {
  const usernameFilter = useId();

  return (
    <>
      <label htmlFor={usernameFilter} className={css.labelFilter}>
        Find contacts by name{' '}
      </label>
      <input
        type="text"
        id={usernameFilter}
        name="username"
        onChange={onChange}
        className={css.inputFilter}
      />
    </>
  );
};
