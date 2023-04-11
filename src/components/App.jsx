// import { Component } from 'react';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { ContactFind } from './ContactFind';
import { Section, Title } from './GlobalStyle';
import { useSelector } from 'react-redux';
import { add, del } from '../redux/contactSlice';
import { filterChange } from '../redux/filterSlice';
import { useDispatch } from 'react-redux';

export const App = () => {
  const [contacts, setContacts] = useState(
    useSelector(state => state.value.contacts)
  );
  const [filters, setFilter] = useState(
    useSelector(state => state.filter.filter)
  );
  const dispatch = useDispatch();
  const addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };

    contacts.some(contact => contact.name === name)
      ? alert(`${name} is already in your contact list.`, 'OK')
      : setContacts(contacts => [newContact, ...contacts]);

    console.log({ id: nanoid(), name, number });
    dispatch(add({ id: nanoid(), name, number }));
  };

  const deleteContact = contactId => {
    setContacts(
      contacts => contacts.filter(contact => contact.id !== contactId),
      console.log(contacts),
      dispatch(del(contacts))
    );
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
    console.log(event.currentTarget.value);
    dispatch(filterChange(event.currentTarget.value));
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
        // dispatch={() => useDispatch(valueSlice())}
      />
    </Section>
  );
};
