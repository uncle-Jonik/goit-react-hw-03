import { useId } from 'react';
import css from './SearchBar.module.css';

export const SearchBar = ({ onClick }) => {
  const usernameFilter = useId();
  return (
    <>
      <label htmlFor={usernameFilter}>Find contacts by name</label>
      <input type="text" id={usernameFilter} name="username" onChange={onClick} />
    </>
  );
};
