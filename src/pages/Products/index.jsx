import React from "react";

import styles from "./Products.module.css";

import { useGetProductsQuery } from "../../redux/productsApi";

import Product from "../../components/Product";

const Products = () => {
  const { data = [], isLoading } = useGetProductsQuery();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className={styles.products}>
      <div className="container">
        <div className={styles.inner}>
          {data.map((item) => (
            <Product {...item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
