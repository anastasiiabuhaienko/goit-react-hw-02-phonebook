import PropTypes from 'prop-types';
import { useState } from "react";
import React from 'react';
import css from './AddContact.module.css';


const AddContact = ({onAddContact}) => {

    const [state, setState] = useState({
        name: '',
        number: '',
    });



  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setState((prevValue) => ({...prevValue, [name]: value }));
  };

    
    const handleSubmit = event => {
        event.preventDefault();
        onAddContact(state.name, state.number);
    };



        return (
            <form className={css.form} onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        value={state.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        value={state.number}
                        onChange={handleChange}
                        required
                        
                    />      
                </label>
                    
                <button 
                    className ={css.submitButton}
                    type="submit"
                    >Add contact</button>
            </form>
        );
};

export default AddContact;

AddContact.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
};


