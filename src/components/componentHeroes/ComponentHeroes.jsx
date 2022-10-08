import React, { useContext } from "react";
import { FavoritesContext } from "../../utils/FavotiterContext";
import HeroesList from "../heroesList/HeroesList";
import styles from "./style.module.scss";

const ComponentHeroes = ({ heroes }) => {
  const favoritesContext = useContext(FavoritesContext);

  return (
    <div className={styles.containerHero}>
      <div className={styles.ulHeroes}>
        <HeroesList
          heroes={heroes}
          onFavoritesAdd={favoritesContext.addFavorites}
          favorites={favoritesContext.list}
        />
      </div>
    </div>
  );
};

export default ComponentHeroes;
