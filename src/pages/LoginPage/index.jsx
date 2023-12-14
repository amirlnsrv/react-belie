import React from "react";

import styles from "./LoginPage.module.css";
import Login from "../../components/Login";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className={styles.user}>
      <div className="container">
        <div className={styles.inner}>
          <h2>Войти</h2>
          <Login />

          <p>
            Или <Link to="/register">Зарегистрироваться</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
