import PropTypes from 'prop-types';
import style from './Statistics.module.css'

const StatisticsList = ({ stats }) => {
    return (<ul className={style.stat}>
                {stats.map(({id, label, percentage}) =>(<li className={style.item} key={id}>
                    <span className={style.label}>{label} </span>
                    <span className={style.percentage}>{percentage}%</span>
                </li>))}
            </ul>)
}

StatisticsList.protoType = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))

}

export default StatisticsList; 