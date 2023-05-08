// import React from "react";
import { Component, useState } from "react";
import { nanoid } from 'nanoid';
import AddContact from "./AddContact/AddContact";
import Section from "./Section/Section";


export const App = () =>  {

  const [state, setState] = useState({
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  });
  

  const addContact = (name) => {
    const contact = {
      name,
      id: nanoid(10),
    }
  };


    return (
      <>
        <Section
          title="Phonebook">
            
            <AddContact 
              name={state.name}
              onAddContact = {addContact}
            />
        
        </Section>

        <Section
          title="Contacts">
        
        </Section>
        
      
      </>
    );
};

