import React from "react";

import { useNavigate } from "react-router-dom";

import { CustomContext } from "../../utils/Context";

import axios from "../../utils/axios";

const FormRegistration = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  const { user, setUser } = React.useContext(CustomContext);

  const handleRegister = (e) => {
    e.preventDefault();

    let newUser = {
      email,
      password,
    };

    if (email == "" || password == "") {
      alert("Заполните все поля!");
    } else {
      axios
        .post("/register", newUser)
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
    <form action="" onSubmit={handleRegister}>
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
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default FormRegistration;
