import PropTypes from 'prop-types';
import { useState } from "react";
import React from 'react';
import css from './AddContact.module.css';


const AddContact = ({name, onAddContact}) => {

    const [state, setState] = useState({
        name: '',
        number: '',
    });

        return (
            <form className={css.form}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
                        required
                    />      
                </label>
                    
                <button 
                    className ={css.submitButton}
                    type='submit'
                    onClick = {() => onAddContact(name)}
                    >Add contact</button>
            </form>
        );
};

export default AddContact;

AddContact.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
};


