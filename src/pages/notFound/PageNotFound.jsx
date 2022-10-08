import React from "react";
import styles from "./styles.module.scss";

const PageNotFound = () => {
  return (
    <div className={styles.error}>
      <div className={styles.title}>Mischief managed, page not found</div>
      <img
        className={styles.gif}
        src={require("../../image/shalost.gif")}
        alt="error"
      />
      <a className={styles.button} href="/">
        Back to Hogwards
      </a>
    </div>
  );
};

export default PageNotFound;
