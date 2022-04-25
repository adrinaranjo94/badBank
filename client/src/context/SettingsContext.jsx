import { createContext, useEffect, useReducer, useState } from "react";
import {
  initialValues,
  settingsReducer,
  types,
} from "../reducer/settingsReducer";

export const SettingsContext = createContext();

const valueCurrencies = { USD: 0.96, EUR: 1 };

const keyLocalStorage = "badBank_settings";

export const SettingsProvider = ({ children }) => {
  const [settings, dispatch] = useReducer(settingsReducer, initialValues);

  useEffect(() => {
    // getItem -> JSON.parse
    // setItem -> JSON.stringify
    const settingsLS = localStorage.getItem(keyLocalStorage);
    if (settingsLS) {
      const auxSettings = JSON.parse(settingsLS);
      dispatch({ type: types.LOAD_FROM_LS, payload: auxSettings });
    } else {
      localStorage.setItem(keyLocalStorage, JSON.stringify(initialValues));
    }
  }, []);

  useEffect(() => {
    const settingsLS = localStorage.getItem(keyLocalStorage);
    if (settingsLS && Object.keys(settings).length > 0) {
      if (JSON.stringify(settings) !== settingsLS) {
        localStorage.setItem(keyLocalStorage, JSON.stringify(settings));
      }
    }
  }, [settings]);

  const changeSettings = (key, value) => {
    dispatch({ type: key, payload: value });
  };

  const resetSettings = () => {
    dispatch({ type: types.RESET });
    localStorage.setItem(keyLocalStorage, JSON.stringify(initialValues));
  };

  console.log(settings);

  return (
    <SettingsContext.Provider
      value={{
        settings,
        valueCurrency: valueCurrencies[settings.currency],
        changeSettings,
        resetSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
