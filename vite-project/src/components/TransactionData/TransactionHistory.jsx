  import css from "./TransactionHistory.module.css"
  
  export default function TransactionHistory({ items }) {
    return (
      <table className={css.table}>
        <thead className={css.tableHeader}>
          <tr>
            <th className={css.column}>Type</th>
            <th className={css.column}>Amount</th>
            <th className={css.column}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td className={css.cellUp}>{type}</td>
              <td className={css.cell}>{amount}</td>
              <td className={css.cell}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }