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
    ],
    current: null,
    filtered: null
  }


  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  const addContact = contact => {
    contact.id = uuid.v4();

    dispatch({
      type: ADD_CONTACT,
      payload: contact
    })

  }

  // Delete Contact

  const deleteContact = (id) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    })
  }

  // Set current contact
  const setCurrent = (contact) => {
    dispatch({
      type: SET_CURRENT,
      payload: contact
    })
  }

  // Clear cuurent contact
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT
    })
  }
  // Update Contact
  const updateContact = (contact) => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact
    })
  }


  // Filter Contacts
  const filterContacts = (text) => {
    dispatch({
      type: FILTER_CONTACTS,
      payload: text
    })
  }
  // Clear Filters
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER
    })
  }



  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact,
        current: state.current,
        setCurrent,
        clearCurrent,
        updateContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )

}

export default ContactState;