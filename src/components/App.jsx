import css from './App.module.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { SearchBar } from './SearchBar/SearchBar';
import { ContactForm } from './ContactForm/ContactForm';

const config = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

const localStorage = () => {
  const savedObject = window.localStorage.getItem('settings');
  if (savedObject !== null) {
    return JSON.parse(savedObject);
  }
  return config;
};

export const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState(localStorage);
  useEffect(() => {
    window.localStorage.setItem('settings', JSON.stringify(data));
  }, [data]);

  const visibleUsers = data.filter(user =>
    user.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const addUsers = newUser => {
    setData(actualUsers => {
      return [...actualUsers, newUser];
    });
  };
  const deleteUsers = userId =>
    setData(actualUsers => {
      return actualUsers.filter(user => user.id !== userId);
    });

  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addUsers} />
      <SearchBar
        onChange={event => {
          setInputValue(event.target.value);
        }}
      />
      <ContactList constctsList={visibleUsers} onDelete={deleteUsers} />
    </>
  );
};
