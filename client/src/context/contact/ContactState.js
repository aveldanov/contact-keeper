import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';


const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Name1",
        email: "email1@email1.com",
        phone: "111-455-6789",
        type: "professional"
      },
      {
        id: 2,
        name: "Name2",
        email: "email2@email2.com",
        phone: "222-455-6789",
        type: "personal"
      },
      {
        id: 3,
        name: "Name3",
        email: "email3@email3.com",
        phone: "333-455-6789",
        type: "personal"
      }
    ]
  }


  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set current contact

  // Clear cuurent contact

  // Update Contact

  // Filter Contacts

  // Clear Filters


  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )

}

export default ContactState;