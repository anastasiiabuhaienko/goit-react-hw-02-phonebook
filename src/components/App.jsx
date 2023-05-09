// import React from "react";
import { useState } from "react";
import { nanoid } from 'nanoid';
import AddContact from "./AddContact/AddContact";
import Section from "./Section/Section";
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';


export const App = () =>  {

  const [state, setState] = useState({
    contacts: [
      {id: nanoid(10), name: 'Rosie Simpson', number: '459-12-56'},
      {id: nanoid(10), name: 'Hermione Kline', number: '443-89-12'},
      {id: nanoid(10), name: 'Eden Clements', number: '645-17-79'},
      {id: nanoid(10), name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  });
  
  const addContact = (name, number) => {
    const contact = {
      name,
      number,
      id: nanoid(10),
    };

    setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
  };

  const deleteContact = (id) => {
    setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id)
    }));
  };

  const changeFilter = event => {
    const { value } = event.currentTarget;
    setState({...state, filter: value });
  };

  const normalizedFilter = state.filter.toLowerCase();

  const filteredContacts = state.contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.toLowerCase().includes(normalizedFilter)
  });



    return (
      <>
        <Section
          title="Phonebook">
            
            <AddContact 
              onAddContact = {addContact}
            />
        
        </Section>

        <Section
          title="Contacts">
        

          <Filter
            value={state.filter}
            onChange={changeFilter}
          />

          <ContactsList
            contacts={filteredContacts}
            onDeleteContact={deleteContact}

          />
        </Section>
        

      
      </>
    );
};
