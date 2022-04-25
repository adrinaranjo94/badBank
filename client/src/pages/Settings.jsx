import { useContext, useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Page } from "../components/Page";
import { Text } from "../components/Text";
import { SettingsContext } from "../context/SettingsContext";

export const Settings = () => {
  const { changeSettings, settings, resetSettings } =
    useContext(SettingsContext);

  const [theme, setTheme] = useState({ ...settings });

  useEffect(() => {
    setTheme({ ...settings });
  }, [settings]);

  const handleChange = (key, value) => {
    setTheme({ ...settings, [key]: value });
  };

  const changeProperty = (key) => {
    changeSettings(key, theme[key]);
  };

  return (
    <Page>
      {Object.keys(theme).map((property) => (
        <div
          key={`settings__${property}`}
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
          }}
        >
          <Text styles={{ margin: "12px 0" }}>{property}</Text>
          <div>
            <Input
              type="text"
              value={theme[property]}
              color="secondaryColor"
              handleChange={({ target }) =>
                handleChange(property, target.value)
              }
            />
            <Button
              handleClick={() => changeProperty(property)}
              styles={{ marginLeft: "12px" }}
            >
              Save
            </Button>
          </div>
        </div>
      ))}
      <Button handleClick={resetSettings} styles={{ width: "60%" }}>
        RESET
      </Button>
    </Page>
  );
};
