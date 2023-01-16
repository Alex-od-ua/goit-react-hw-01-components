import PropTypes from 'prop-types';

export function FrindListItem({ id, avatar, name, isOnline }) {
  return (
    <li className="item" id={id}>
      <span statusType={isOnline}>{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
