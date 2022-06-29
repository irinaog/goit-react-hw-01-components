import React from 'react';
import ReactDOM from 'react-dom/client';
import { Profile } from 'components/Profile/Profile';
import user from './user.json'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
  </React.StrictMode>
);
