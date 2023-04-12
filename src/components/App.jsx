import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { ContactFind } from './ContactFind';
import { Section, Title } from './GlobalStyle';

export const App = () => {
  return (
    <Section>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <ContactFind />
      <ContactList />
    </Section>
  );
};
