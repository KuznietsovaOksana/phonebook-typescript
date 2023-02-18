import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactList: React.FC = () => {
  const contacts = useAppSelector(state => state.contacts.items);
  const filter = useAppSelector(state => state.filter);
  const dispatch = useAppDispatch();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}{' '}
          </p>
          <button
            type="button"
            onClick={() => {
              const action = deleteContact(id);
              dispatch(action);
            }}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};
