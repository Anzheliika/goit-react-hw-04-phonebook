import { useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Phonebook } from './App.styled';
import useLocalStorage from '../../hooks/useLocalStorage';
import toast from 'react-hot-toast';

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? toast(`${newContact.name} is already in contacts!`)
      : setContacts(prevContact => [...prevContact, newContact]);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(prevContact =>
      prevContact.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Phonebook>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </Phonebook>
  );
}

export default App;
