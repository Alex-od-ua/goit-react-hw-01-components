import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export function FrindListItem({ id, avatar, name, isOnline }) {
  return (
    <li className={css.friendItem} key={id}>
      <span className={isOnline ? css.onLine : css.offLine}>{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FrindListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
