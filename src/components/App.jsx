// import { useState, useEffect } from 'react';
// import shortid from 'shortid';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactList';
import { Filter } from './Filter/Filter';

import { BoxForm } from './App.styled';

export const App = () => {
  return (
    <BoxForm>
      <ContactForm />
      <Filter />
      <ContactsList />
      <ToastContainer position="top-right" theme="colored" autoClose={2000} />
    </BoxForm>
  );
};
