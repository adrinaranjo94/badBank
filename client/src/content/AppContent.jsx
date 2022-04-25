import { useContext } from "react";
import { LeftBar } from "../components/LeftBar";
import { AuthContext } from "../context/AuthContext";
import { AppRouter } from "../router/AppRouter";

export const Content = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div style={{ display: "flex", flexWrap: "nowrap" }}>
      <AppRouter>{isLoggedIn && <LeftBar />}</AppRouter>
    </div>
  );
};
