import PropTypes from 'prop-types';
import StatisticsList from './StatisticsList'
import style from './Statistics.module.css'

const Statistics = ({title, stats}) => {
    return (
        <section className={style.statistics}>
            {title && <h2 className={style.title}>{title}</h2>}
            <StatisticsList stats={stats}/>
        </section>
    )
};

Statistics.protoType = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object.isRequired)
}

export default Statistics;