import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.logo}>Белье</div>
          <ul className={styles.nav}>
            <li>Shop All</li>
            <li>Our Story</li>
            <li>Blog</li>
            <li>Pages</li>
          </ul>
          <div className={styles.cart}>
            <p>
              Cart <span>0</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
