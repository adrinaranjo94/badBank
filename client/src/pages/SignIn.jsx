import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    repeatPassword: "",
  });
  const { signIn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(formData.email, formData.username, formData.password);
  };

  const handleChangeInput = ({ target }) => {
    setFormData({ ...formData, [target.id]: target.value });
  };

  return (
    <div>
      <h1>SignIn</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" id="email" onChange={handleChangeInput} />
        <input type="text" id="username" onChange={handleChangeInput} />
        <input type="password" id="password" onChange={handleChangeInput} />
        <input
          type="password"
          id="repeatPassword"
          onChange={handleChangeInput}
        />
        <button type="submit" />
      </form>
    </div>
  );
};
