import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';
import { ListBox, Item, BtnItem, Text } from './ContactList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();
  let contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter.value);
  if (filter !== '')
    contacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

  return (
    <ListBox>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            {name}: {number}
            <BtnItem type="button" onClick={() => dispatch(deleteContacts(id))}>
              Delete
            </BtnItem>
          </Item>
        ))}
      </ul>
      {contacts.length === 0 && <Text>no contacts available</Text>}
    </ListBox>
  );
};
