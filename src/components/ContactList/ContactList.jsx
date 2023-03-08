import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ContactListWrap } from './ContactList.styled';

export const ContactList = ({ contacts, onRemove }) => {
  return (
    <ContactListWrap>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            id={id}
            onRemove={onRemove}
          />
        );
      })}
    </ContactListWrap>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onRemove: PropTypes.func.isRequired,
};
