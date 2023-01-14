import Profile from './components/Profile';
// import ProfileList from './components/ProfileList';
import user from './user.json';
// import PropTypes from 'prop-types';

export const App = () => {
  return (
    <Profile
      userName={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
  );
};
