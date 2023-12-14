import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

import { Button, Drawer } from "antd";

const Header = () => {
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
            <li>Мои заказы</li>
          </ul>
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
    </header>
  );
};

export default Header;
