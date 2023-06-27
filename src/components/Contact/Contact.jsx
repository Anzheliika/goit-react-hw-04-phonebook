import { Item, Text, Button } from './Contact.styled';

const Contact = ({ name, number, id, onDeleteContact }) => {
  return (
    <>
      <li>
        <Item>
          <Text>
            {name}: {number}
          </Text>
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </Item>
      </li>
    </>
  );
};

export default Contact;
