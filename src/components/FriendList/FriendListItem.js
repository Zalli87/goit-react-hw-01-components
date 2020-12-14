import PropTypes from 'prop-types';
import style from './FriendListItem.module.css'


const FriedListItem = ({ avatar, name, isOnline = true }) => {
    return (
        <li className={style.item}>
  <span className={isOnline ? `${style.isOnline}` : `${style.isOffline}`}></span>
  <img className={style.avatar} src={avatar} alt={name} width="48" />
  <p className={name}>{name}</p>
</li>
    )
};

FriedListItem.protoType = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
}

export default FriedListItem; 