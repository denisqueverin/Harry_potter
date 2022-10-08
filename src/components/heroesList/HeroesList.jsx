import React from "react";
import { Link } from "react-router-dom";
import diamond from "../../image/diamond.svg";
import styles from "./styles.module.scss";

const HeroesList = ({ heroes, onFavoritesAdd, favorites }) => {
  const renderUrl = (img) => img || "https://clck.ru/32DYQ2";

  return heroes.map((hero, index) => {
    const isFavorites = favorites.map((el) => el.name).includes(hero.name);
    return (
      <div key={hero.name + index} className={styles.heroesList}>
        <img src={diamond} className={styles.leftDiamond} alt="diamond" />
        <div className={styles.title}>{hero.name}</div>
        <div
          className={styles.photo}
          style={{ backgroundImage: `url(${renderUrl(hero.image)})` }}
        />
        <div className={styles.locationBtn}>
          <Link to={`/hero/${hero.name}`} className={styles.btnInfo}>
            Get info
          </Link>
          <button
            onClick={() => onFavoritesAdd(hero)}
            className={isFavorites ? styles.btnLikeOn : styles.btnLikeOff}
          />
        </div>
        <img src={diamond} className={styles.rightDiamond} alt="r-diamond" />
      </div>
    );
  });
};

export default HeroesList;
