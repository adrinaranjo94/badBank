import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const PublicRoute = (props) => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? <Redirect to="/" /> : <Route {...props} />;
};
