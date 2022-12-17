import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import css from './App.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

const App = () => {
  const [ contacts, setContacts ] = useState(JSON.parse(localStorage.getItem('contacts')) ?? [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [ filter, setFilter ] = useState('');

  const addContact = ({ name, number }) => {
      const verificationContact = contacts.find(el => el.name.toLowerCase() === name.toLowerCase());

      if (!verificationContact) {
        return setContacts([...contacts, { id: nanoid(), name, number, }, ]);
      } else {
        alert(`${name} is already in contacts`);
      }
  };
  
  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const showVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

    return (
      <div className={css.phonebook}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm 
          onSubmit={addContact} 
          />
        <h2 className={css.contacts}>Contacts</h2>
        <Filter 
          filter={filter} 
          onChange={changeFilter} 
          />
        <ContactList
          contacts={showVisibleContacts()}
          onDeleteContact={deleteContact} 
          />
      </div>
    );
}

export default App;