import { ContactItem } from './ContactItem';
import { List } from './GlobalStyle';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactSlice';
import { getContacts, getFilter } from '../redux/contactSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const onDelete = contactID => dispatch(deleteContact(contactID));

  const contactsFilter = () => {
    const filterNormalize = filterValue.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalize)
    );
  };

  const filtredContacts = contactsFilter();
  return (
    <List>
      {filtredContacts.map(item => (
        <ContactItem
          key={item.name}
          name={item.name}
          contactID={item.name}
          number={item.number}
          deleteContact={() => onDelete(item.name)}
        />
      ))}
    </List>
  );
};
