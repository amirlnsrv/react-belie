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
          <div className={styles.skinnBlock}>
            <a href="#">
              <img src={Skinn} alt="" />
            </a>
            <p className="text skinnBlock-text">
              The wise man therefore always holds in these matters to this
              principle
            </p>
            <div className={styles.leftSideBottom}>
              <div className={styles.design}>
                <p className="text design-text">Designed by</p>
                <span>
                  <a className={styles.designText} href="#">
                    {" "}
                    Webestica
                  </a>
                </span>
              </div>
              <div className={styles.power}>
                <p className="text power-text">Powered by</p>
                <span>
                  <a className={styles.powerText} href="#">
                    {" "}
                    Webflow{" "}
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.pagesBlock}>
            <a href="#" className={"pagesTitle"}>
              Pages
            </a>
            <div className={styles.pagesList}>
              <ul>
                <li className={styles.pageLink}>
                  <a href="#"></a>Home
                </li>
                <li className={styles.pageLink}>
                  {" "}
                  <a href="#"> </a>Home2
                </li>
                <li className={styles.pageLink}>
                  <a href="#"></a>Shop All
                </li>
                <li className={styles.pageLink}>
                  <a href="#"></a>Our Story
                </li>
                <li className={styles.pageLink}>
                  <a href="#"></a>Blog
                </li>
                <li className={styles.pageLink}>
                  <a href="#"></a>FAQs
                </li>
              </ul>
              <ul>
                <li className={styles.pageLink}>
                  <a href="#"></a>Contact Us
                </li>
                <li className={styles.pageLink}>
                  <a href="#"></a>Instructions
                </li>
                <li className={styles.pageLink}>
                  <a href="#"></a>Style Guide
                </li>
                <li className={styles.pageLink}>
                  <a href="#"></a>Licenses
                </li>
                <li className={styles.pageLink}>
                  <a href="#"></a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.contactPage}>
            <a className={"contactsTitle"}>Contact us</a>
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
          <div className={styles.descriptionBlock}>
            <a className={styles.descriptionTitle} href="#">
              We’re here for you
            </a>
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
