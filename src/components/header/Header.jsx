import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import logo from "../../image/title.svg";
import butger from "../../image/burger.svg";
import hearts from "../../image/hearts.png";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <img src={butger} className={styles.butger} alt="butger" />
      <img src={logo} className={styles.logo} alt="logo" />
      <Link to="/favorites">
        <img className={styles.favorites} src={hearts} alt="favorites" />
      </Link>
    </div>
  );
};

export default Header;
