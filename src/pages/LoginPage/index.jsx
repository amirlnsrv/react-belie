import React from "react";

import styles from "./LoginPage.module.css";

import FormLogin from "../../components/FormLogin";

import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className={styles.login}>
      <div className="container">
        <div className={styles.inner}>
          <h2>Войти</h2>
          <FormLogin />

          <p>
            Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
