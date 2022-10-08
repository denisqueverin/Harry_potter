import React from "react";
import styles from "./styles.module.scss";

export const Filter = ({ items = [], value, onChange, title }) => {
  return (
    <div className={styles.filters}>
      <div className={styles.lineDemarcation} />
      <div className={styles.subtitle}>{title}</div>
      <div className={styles.list}>
        <label
          htmlFor="color"
          onChange={(e) => {
            onChange(e.target.value);
          }}
        >
          {items.map((item, index) => {
            return (
              <label className={styles.listItem} key={index + item.value}>
                <input
                  type="radio"
                  checked={item.value === value}
                  value={item.value}
                />
                <span>{item.label}</span>
              </label>
            );
          })}
        </label>
      </div>
    </div>
  );
};
