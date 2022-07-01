import React from 'react';
import ReactDOM from 'react-dom/client';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transaction from './transactions.json';
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
    
    <Statistics
      title="Upload stats"
      stats={data} />
    
    <FriendList
      friends={friends} />
    
    <TransactionHistory
    items={transaction}/>
  
  </React.StrictMode>
  
);
