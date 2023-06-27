import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => {
      return (
        <Contact
          key={nanoid()}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      );
    })}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
