import { Link } from "react-router-dom";

export const TopBar = ({ inputElement }) => {
  return (
    <div className="topBar">
      <Link to="/transactions/add">
        <button>Add Transaction</button>
      </Link>
      {inputElement}
    </div>
  );
};
