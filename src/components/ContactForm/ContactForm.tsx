import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contactsSlice';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');

  const dispatch = useAppDispatch();
  const contacts = useAppSelector(state => state.contacts.items);

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    }
    if (e.target.name === 'number') {
      setNumber(e.target.value);
    }
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    const contact = {
      name,
      number,
      id: nanoid(),
    };

    const isAtList = contacts.find(contact => contact.name === name);
    if (isAtList) {
      alert('Already in list');
      return;
    }

    dispatch(addContact(contact));

    const resetValue = e.target as HTMLFormElement;
    resetValue.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={inputChange}
        />
      </div>
      <div>
        <label htmlFor="number">Phone number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={inputChange}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};
