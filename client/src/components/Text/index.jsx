import { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";

export const Text = ({ children, styles }) => {
  const { settings } = useContext(SettingsContext);

  return <p style={{ color: settings.fontColor, ...styles }}>{children}</p>;
};
