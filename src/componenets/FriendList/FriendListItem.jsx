import PropTypes from 'prop-types';
import { Status, FriendsName } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Status isOnline={isOnline}></Status>
      <img src={avatar} alt={name} width="48" />
      <FriendsName>{name}</FriendsName>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
