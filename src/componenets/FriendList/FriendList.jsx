import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendsList, FriendItem } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendItem key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </FriendItem>
        );
      })}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
