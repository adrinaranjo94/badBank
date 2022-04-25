import { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";

export const Button = ({
  color = "primaryColor",
  handleClick,
  children,
  styles,
}) => {
  const { settings } = useContext(SettingsContext);

  return (
    <button
      style={{
        backgroundColor: settings[color],
        color: settings.fontColor,
        border: "0",
        padding: "4px 8px",
        borderRadius: "8px",
        ...styles,
      }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
