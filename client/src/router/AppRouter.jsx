import { Route, Switch } from "react-router-dom";
import { LogIn } from "../pages/LogIn";
import { Settings } from "../pages/Settings";
import { SignIn } from "../pages/SignIn";
import { Transactions } from "../pages/Transactions";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = ({ children }) => {
  return (
    <>
      {children}
      <Switch>
        <PrivateRoute path="/" exact component={Transactions} />
        <PrivateRoute path="/settings" exact component={Settings} />
        <PrivateRoute path="/transactions" exact component={Transactions} />
        <PublicRoute path="/login" exact component={LogIn} />
        <PublicRoute path="/signin" exact component={SignIn} />
      </Switch>
    </>
  );
};
