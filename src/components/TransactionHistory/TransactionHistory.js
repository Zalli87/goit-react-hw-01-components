import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';
import style from './TransactionHistiry.module.css'


const TransactionHistory = ({items}) => {
    return (
        <table className={style.table}>
  <thead className={style.thead}>
    <tr className={style.tr}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody className={style.tbody}>
    {items.map((TransactionHistoryItem))}
    </tbody>
</table>
    )
    
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default TransactionHistory;