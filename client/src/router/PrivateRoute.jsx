import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const PrivateRoute = (props) => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? <Route {...props} /> : <Redirect to="/login" />;
};
