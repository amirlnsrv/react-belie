import React from "react";

import styles from "./Product.module.css";

const Product = (item) => {
  const { image, category, price, title } = item;

  return (
    <div className={styles.product}>
      <div className={styles.img}>
        <img src={image} alt="" />
      </div>
      <div className={styles.text}>
        <div className={styles.subtitle}>
          <p>{category}</p>
          <p>{price} сом</p>
        </div>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <button className="btn btn-products">Shop now</button>
    </div>
  );
};

export default Product;
