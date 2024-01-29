import css from './App.module.css';
import { useState } from 'react';
import { ContactList } from './ContactList/ContactList';
import { SearchBar } from './SearchBar/SearchBar';

export const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const visibleUsers = data.filter(user =>
    user.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <SearchBar
        onChange={event => {
          setInputValue(event.target.value);
        }}
      />
      <ContactList constctsList={visibleUsers} />
    </>
  );
};
