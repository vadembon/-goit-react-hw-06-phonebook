import { nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts, deleteContacts } from 'redux/contactsSlice';
import { TitleForm, Form, Label, Input, Btn } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const newContact = {
      id: nanoid(),
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    dispatch(addContacts(newContact));
    form.reset();
    const checkContact = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (checkContact) {
      toast.info(`${newContact.name} is already in contacts.`);
      dispatch(deleteContacts(newContact.id));
    }
  };

  return (
    <div>
      <TitleForm>Phonebook</TitleForm>
      <Form action="" onSubmit={handleSubmit}>
        <Label htmlFor="">Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor="">Number</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Btn type="submit">Add contacts</Btn>
      </Form>
    </div>
  );
};
