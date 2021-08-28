import React from "react";
import PropTypes from "prop-types";
import styles from "./transaction.module.css";

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionTable}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map((item) => (
        <tr key={item.id}>
          <td className={styles.type}>{item.type}</td>
          <td className={styles.type}>{item.amount}</td>
          <td className={styles.type}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
