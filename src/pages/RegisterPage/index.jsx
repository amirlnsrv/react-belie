import React from "react";

import styles from "./RegisterPage.module.css";
import { Link } from "react-router-dom";
import FormRegistration from "../../components/FormRegistration";

const RegisterPage = () => {
  return (
    <div className={styles.register}>
      <div className="container">
        <div className={styles.inner}>
          <h2>Зарегистрироваться</h2>
          <FormRegistration />

          <p>
            Уже есть аккаунт? <Link to="/login">Войти</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
