import PropTypes from 'prop-types';
import style from './TransactionHistiry.module.css'

const TransactionHistoryItem = ({ id, type, amount, currency }) => {
    return (
         <tr className={style.tr} key={id}>
      <td className={style.td}>{type}</td>
      <td className={style.td}>{amount}</td>
      <td className={style.td}>{currency}</td>
    </tr>
    )
}

TransactionHistoryItem.protoType = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string
}

export default TransactionHistoryItem;