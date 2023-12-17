import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";

import { Button, Drawer } from "antd";
import { CustomContext } from "../../utils/Context";

const Header = () => {
  const { user, setUser } = React.useContext(CustomContext);

  const handlelogOutUser = () => {
    setUser({
      email: "",
    });
    localStorage.removeItem("user");
  };

  const [open, setOpen] = React.useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.logo}>
            <Link to="/">Белье</Link>
          </div>

          <ul className={styles.nav}>
            <li>
              <Link to="/products">Продукты</Link>
            </li>
            <li>О нас</li>
            <li>
              <Link to="/orders">Мои заказы</Link>
            </li>
          </ul>

          <div className={styles.right}>
            {user.email.length ? (
              <div className={styles.logout} onClick={handlelogOutUser}>
                <CiUser size={20} /> Выйти
              </div>
            ) : (
              <Link to="/login" className={styles.login}>
                <CiUser size={20} />
                Войти
              </Link>
            )}

            <div className={styles.cart} onClick={showDrawer}>
              <p>
                Корзина <span>0</span>
              </p>
            </div>
            <Drawer
              title="Корзина"
              placement="right"
              onClose={onClose}
              open={open}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
