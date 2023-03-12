import PropTypes from 'prop-types';
import { ListItem, Text, Button } from './ContactListItem.styled';
import { MdOutlinePersonRemoveAlt1 } from 'react-icons/md';

export const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <ListItem>
      <Text>
        {name}: {number}
      </Text>
      <Button type="button" onClick={() => deleteContact(id)}>
        <MdOutlinePersonRemoveAlt1 />
      </Button>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
