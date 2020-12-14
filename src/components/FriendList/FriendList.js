import PropTypes from 'prop-types';
import FriedListItem from './FriendListItem';
import style from './FriendList.module.css'

const FriendList = ({friends}) => {
    return (
        <ul className={style.friends} >
            {friends.map(({id, avatar, name, isOnline = true }) => (<FriedListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
            />))}
  </ul>
    )
}

FriendList.protoType = {
    friends: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default FriendList;