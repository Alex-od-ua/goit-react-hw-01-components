// import PropTypes from 'prop-types';
import { FrindListItem } from './FrindListItem';

export function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FrindListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}
