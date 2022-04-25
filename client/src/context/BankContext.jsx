import { createContext } from "react";

export const BankContext = createContext();

export const BankProvider = ({ children }) => {
  return (
    <BankContext.Provider
      value={{
        balance: 0,
        transactions: [{ title: "hola" }, { title: "hola" }, { title: "hola" }],
      }}
    >
      {children}
    </BankContext.Provider>
  );
};
