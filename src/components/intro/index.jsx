import React from "react";
import styles from "./intro.module.css";

import intro from "../../assets/img/intro.jpg";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.leftSide}>
            <p className={styles.title}>Lorem ipsum dolor sit.</p>
            <button className="btn btn-intro">view bellie</button>
          </div>

          <div className={styles.rightSide}>
            <img src={intro} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
