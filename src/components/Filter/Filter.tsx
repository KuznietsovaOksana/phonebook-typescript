import { useAppDispatch } from '../../hooks/hooks';
import { filterContacts } from '../../redux/filterSlice';

export const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <p>Who would you like to find?</p>
      <input
        type="text"
        onChange={event => {
          const action = filterContacts(event.target.value);
          dispatch(action);
        }}
      />
    </>
  );
};
