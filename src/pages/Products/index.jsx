import React from "react";

import styles from "./Products.module.css";

import Product from "../../components/Product";
import axios from "axios";

const Products = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3001/products");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (data == null) return <h1>Loading...</h1>;

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
