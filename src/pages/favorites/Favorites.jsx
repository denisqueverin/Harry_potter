import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HeroesList from "../../components/heroesList/HeroesList";
import { FavoritesContext } from "../../utils/FavotiterContext";
import butger from "../../image/burger.svg";
import styles from "./styles.module.scss";

const Favorites = () => {
  const favoritesContext = useContext(FavoritesContext);

  return (
    <div className={styles.favorites}>
      <div className={styles.footer}>
        <img src={butger} className={styles.butger} alt="butger" />
        <div className={styles.footerTitle}>Favorites</div>
        <Link to="/" className={styles.errorButton}>
          Сome back
        </Link>
      </div>
      <div className={styles.ulHeroes}>
        <HeroesList
          heroes={favoritesContext.list}
          onFavoritesAdd={favoritesContext.addFavorites}
          favorites={favoritesContext.list}
        />
      </div>
      <div className={styles.errorButtonLocation}></div>
    </div>
  );
};

export default Favorites;
