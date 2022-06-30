import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            {friends.map(friends => (
                <FriendListItem key={friends.id}
                    avatar={friends.avatar}
                    name={friends.name}
                    isOnline={friends.isOnline}
                />
            ))}
            
</ul> 
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape),
}