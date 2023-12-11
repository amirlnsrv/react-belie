import React from "react";

import styles from "./RegisterPage.module.css";
import SignUp from "../../components/SignUp";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className={styles.user}>
      <div className="container">
        <div className={styles.inner}>
          <h2>Зарегистрироваться</h2>
          <SignUp />

          <p>
            Уже есть аккаунт? <Link to="/login">Войти</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
