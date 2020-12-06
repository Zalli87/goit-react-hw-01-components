import FriedListItem from './FriendListItem';

const FriendList = ({friends}) => {
    return (
        <ul class="friend-list" >
            {friends.map(({id, avatar, name, isOnline = true }) => (<FriedListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
            />))}
  </ul>
    )
}

export default FriendList;