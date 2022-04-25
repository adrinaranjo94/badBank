import { useContext } from "react";
import { Link } from "react-router-dom";
import { Page } from "../components/Page";
import { BankContext } from "../context/BankContext";

export const Transactions = (props) => {
  const { transactions } = useContext(BankContext);

  return (
    <Page>
      <Link to="/funciona">Dashboard</Link>
      <ul>
        {transactions.map((transaction) => (
          <li>
            {transaction.title} {transaction.type} {transaction.value}
          </li>
        ))}
      </ul>
    </Page>
  );
};
