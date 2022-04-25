import { useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContext";

export const LogIn = () => {
  const iEmailRef = useRef(null);
  const iPasswordRef = useRef(null);

  const { logIn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(iEmailRef.current.value, iPasswordRef.current.value);
  };

  return (
    <div>
      <h1>LogIn</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" ref={iEmailRef} />
        <input type="password" ref={iPasswordRef} />
        <button type="submit" />
      </form>
    </div>
  );
};
