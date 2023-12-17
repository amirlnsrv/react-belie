import React from "react";

import styles from "./MyOrders.module.css";

import axios from "axios";

import Product from "../../components/Product";

const MyOrders = () => {
  const [orders, setOrders] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3001/orders");
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.orders}>
      <div className="container">
        <div className={styles.inner}>
          <h2>Мои заказы</h2>

          {orders == null ? (
            <p>Loading...</p>
          ) : (
            orders.map((item) => <Product {...item} key={item.id} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
