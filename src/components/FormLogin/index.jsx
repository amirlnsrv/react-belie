import React from "react";

import { useNavigate } from "react-router";

import { CustomContext } from "../../utils/Context";
import axios from "../../utils/axios";

const FormLogin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { setUser } = React.useContext(CustomContext);

  const handleLoginUser = (e) => {
    e.preventDefault();

    let newUser = {
      email,
      password,
    };

    if (email == "" || password == "") {
      alert("Заполните все поля!");
    } else {
      axios
        .post("/login", newUser)
        .then(({ data }) => {
          setUser({
            token: data.accessToken,
            ...data.user,
          });
          localStorage.setItem(
            "user",
            JSON.stringify({
              token: data.accessToken,
              ...data.user,
            })
          );
        })
        .catch((err) => console.log(err.message));

      setEmail("");
      setPassword("");
    }
  };

  return (
    <form action="">
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="Пароль"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button type="submit" onClick={handleLoginUser}>
        Войти
      </button>
    </form>
  );
};

export default FormLogin;
