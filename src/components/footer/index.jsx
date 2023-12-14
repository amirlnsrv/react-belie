import React from "react";
import styles from "./footer.module.css";
import Skinn from "../../assets/img/Skinn.svg";
import one from "../../assets/img/face.svg";
import twho from "../../assets/img/inst.svg";
import three from "../../assets/img/pin.svg";
import four from "../../assets/img/twit.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.col}>
            <div className={styles.colHeader}>
              <div className={styles.logo}>
                <img src={Skinn} alt="" />
              </div>
            </div>
            <p className="text skinnBlock-text">
              The wise man therefore always holds in these matters to this
              principle
            </p>
            <p className="text design-text">
              Designed by{" "}
              <span>
                <a className={styles.designText} href="#">
                  Webestica
                </a>
              </span>
            </p>

            <p className="text power-text">
              Powered by{" "}
              <span>
                <a className={styles.powerText} href="#">
                  Webflow
                </a>
              </span>
            </p>
          </div>
          <div className={styles.col}>
            <div className={styles.colHeader}>
              <a href="#" className={"pagesTitle"}>
                Pages
              </a>
            </div>
            <div className={styles.pages}>
              <ul className={styles.pagesList1}>
                <li className={styles.pageLink}>Home</li>
                <li className={styles.pageLink}>Home2</li>
                <li className={styles.pageLink}>Shop All</li>
                <li className={styles.pageLink}>Our Story</li>
                <li className={styles.pageLink}>Blog</li>
                <li className={styles.pageLink}>FAQs</li>
              </ul>
              <ul className={styles.pagesList2}>
                <li className={styles.pageLink}>Contact Us</li>
                <li className={styles.pageLink}>Instructions</li>
                <li className={styles.pageLink}>Style Guide</li>
                <li className={styles.pageLink}>Licenses</li>
              </ul>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.colHeader}>
              <a className="contactsTitle">Contact us</a>
            </div>
            <div className={styles.questions}>
              <p>Have questions or suggestions?</p>
              <a className={styles.contactsLink} href="#">
                hello@webestica.com
              </a>
            </div>
            <div className={styles.callBack}>
              <p>Need assistance? Give us a call.</p>
              <a className={styles.contactsLink} href="#">
                +01 598 269 4756
              </a>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.colHeader}>
              <a className={styles.descriptionTitle} href="#">
                We’re here for you
              </a>
            </div>
            <div className={styles.description}>
              <p className={styles.descriptionText}>
                Monday - Thursday: 9:30 - 18:00
              </p>
              <p>Friday: 9:30 - 15:00</p>
            </div>
            <div>
              <ul className={styles.images}>
                <li>
                  <a href="#">
                    <img src={one} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={twho} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={three} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={four} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
