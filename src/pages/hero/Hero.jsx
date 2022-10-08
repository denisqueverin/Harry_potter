import React from "react";
import { useSelector } from "react-redux";
import { getSelectedHero } from "../../redux/heroes/selectors";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

const Hero = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const hero = useSelector((state) => getSelectedHero(state)(name));

  if (!hero) {
    return (
      <span>
        Такого персонажа не найдено и я не успел доделать эту страницу :(
      </span>
    );
  }

  const {
    name: nameHero,
    image,
    gender,
    dateOfBirth,
    eyeColour,
    patronus,
    house,
    species,
    ancestry,
  } = hero;

  return (
    <div className={styles.heroInfo}>
      <button className={styles.buttonBack} onClick={() => navigate(-1)}>
        Come back
      </button>
      <div className={styles.position}>
        <div className={styles.heroName}>{nameHero}</div>
        <div className={styles.elLocation}>
          <div>
            <img
              className={styles.img}
              src={image ? image : "https://clck.ru/32DYQ2"}
              alt=""
            />
          </div>
          <div>
            <div className={styles.mt}>
              gender: {gender ? gender : "unknown"}
            </div>
            <div className={styles.mt}>
              dateOfBirth: {dateOfBirth ? dateOfBirth : "unknown"}
            </div>
            <div className={styles.mt}>
              eyeColour: {eyeColour ? eyeColour : "unknown"}
            </div>
            <div className={styles.mt}>
              patronus: {patronus ? patronus : "unknown"}
            </div>
            <div className={styles.mt}>
              faculty: {house ? house : "unknown"}
            </div>
            <div className={styles.mt}>
              species: {species ? species : "unknown"}
            </div>
            <div className={styles.mt}>
              ancestry: {ancestry ? ancestry : "unknown"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
