import { Item, Button } from './GlobalStyle';

export const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <Item>
      <span>{name}:</span>
      <span>{number}</span>
      <Button type="button" onClick={() => deleteContact(id)}>
        Delete
      </Button>
    </Item>
  );
};
