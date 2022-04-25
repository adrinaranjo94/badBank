import { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";

export const Page = ({ children }) => {
  const {
    settings: { backgroundColor, fontColor },
  } = useContext(SettingsContext);

  return (
    <div
      style={{
        backgroundColor,
        color: fontColor,
        height: "100vh",
        overflowY: "auto",
        flex: "1",
        padding: "24px 48px",
      }}
    >
      {children}
    </div>
  );
};
