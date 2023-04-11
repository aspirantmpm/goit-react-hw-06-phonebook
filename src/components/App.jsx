// import { Component } from 'react';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { ContactFind } from './ContactFind';
import { Section, Title } from './GlobalStyle';
import { useSelector } from 'react-redux';
// import { valueSlice } from '../redux/valueSlise';

export const App = () => {
  const [contacts, setContacts] = useState(useSelector(state => state.value.contacts));
  const [filters, setFilter] = useState(useSelector(state => state.value.filter));

  const addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };

    contacts.some(contact => contact.name === name)
      ? alert(`${name} is already in your contact list.`, 'OK')
      : setContacts(contacts => [newContact, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const filterContacts = () => {
    const normalizedFilter = filters.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Section>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <Title>Contacts</Title>
      <ContactFind onFilter={changeFilter} filter={filters} />
      <ContactList
        filterContacts={filterContacts()}
        deleteContact={deleteContact}
        // dispatch={useDispatch(valueSlice())}
      />
    </Section>
  );
};
