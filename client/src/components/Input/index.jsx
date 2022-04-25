import { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";

export const Input = (props) => {
  const { settings } = useContext(SettingsContext);
  return (
    <input
      style={{
        background: props.color ? settings[props.color] : settings.primaryColor,
        border: "0",
        borderRadius: "8px",
        padding: "8px 12px",
      }}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.handleChange}
    />
  );
};
