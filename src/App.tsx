import React from 'react';
import { MainTitle } from './components/MainTitle/MainTitle';
import { Title } from './components/Title/Title';
import { ContactForm } from './components/ContactForm/ContactForm';
import { Filter } from './components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';

export const App: React.FC = () => {
  return (
    <>
      <MainTitle title="Phonebook ☎" />
      <ContactForm />
      <Title title="Contacts 📞" />
      <Filter />
      <ContactList />
    </>
  );
};
