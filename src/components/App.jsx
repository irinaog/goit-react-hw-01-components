import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transaction from '../transactions.json';

export const App = () => {
    return (
        <>
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
                items={transaction} />
        </>
    )
};

