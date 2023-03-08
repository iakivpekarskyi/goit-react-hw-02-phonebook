import PropTypes from 'prop-types';
import { ListItem, Text, Button } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <ListItem>
      <Text>
        {name}: {number}
      </Text>
      <Button type="button" onClick={() => onRemove(id)}>
        Delete
      </Button>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
