import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { SettingsContext } from "../../context/SettingsContext";

export const LeftBar = () => {
  const { logOut } = useContext(AuthContext);
  const {
    settings: { leftBarBackgroundColor },
  } = useContext(SettingsContext);

  return (
    <div
      style={{
        backgroundColor: leftBarBackgroundColor,
        width: "300px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Link to="/">Dashboard</Link>
      <Link to="/transactions">Transactions</Link>
      <Link to="/settings">Settings</Link>
      <p onClick={logOut}>Log out</p>
    </div>
  );
};
