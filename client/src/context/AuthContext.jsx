import { createContext } from "react";
import { authServices } from "../services/auth.services";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const logIn = (email, password) => {
    authServices.logIn(email, password);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn: true, logIn }}>
      {children}
    </AuthContext.Provider>
  );
};
