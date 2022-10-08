import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getHeroesLoading, getHeroes } from "../../redux/heroes/selectors";
import Paginator from "../../components/pagination/paginator";
import styles from "../styles.module.scss";
import { Filter } from "../../components/filters/Filter";
import {
  heroesFilters,
  genders,
  alive,
  eyeColour,
  faculty,
  hairColors,
} from "../../utils/Filters";
import Header from "../../components/header/Header";
import ComponentHeroes from "../../components/componentHeroes/ComponentHeroes";

const MainPage = () => {
  const heroes = useSelector(getHeroes);
  const loading = useSelector(getHeroesLoading);

  const [selectedGender, setSelectedGender] = useState();
  const [selectedEyeColour, setSelectedEyeColour] = useState();
  const [selectedAlive, setSelectedAlive] = useState();
  const [selectedFaculty, setSelectedFaculty] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [personInPage] = useState(12);

  const lastHeroesIndex = currentPage * personInPage;
  const firstHeroesIndex = lastHeroesIndex - personInPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const prevStep = () => {
    if (currentPage > 1) {
      setCurrentPage(1);
    }
  };

  const nextStep = () => {
    if (currentPage < Math.ceil(heroes.length / personInPage)) {
      setCurrentPage(Math.ceil(heroes.length / personInPage));
    }
  };

  const currentHeroes = heroesFilters(
    heroes,
    selectedGender,
    selectedAlive,
    selectedColor,
    selectedEyeColour,
    selectedFaculty,
    firstHeroesIndex,
    lastHeroesIndex
  );

  const page = (
    <div>
      <Header />
      <div className={styles.bodyContainer}>
        <div className={styles.containerLocation}>
          <div className={styles.chapter}>
            <div className={styles.title}>Filters</div>
            <div className={styles.location}>
              <Filter
                title={"Hair color"}
                value={selectedColor}
                items={[
                  ...hairColors(heroes).map((color) => {
                    return {
                      value: color,
                      label: color,
                    };
                  }),
                  { value: "", label: "default" },
                ]}
                onChange={(value) => {
                  setSelectedColor(value);
                  setCurrentPage(1);
                }}
              />
            <button className={styles.clearLittleButton} onClick={() => {
                setSelectedColor(undefined)}}>reset color</button>
            </div>
            <Filter
              title={"Gender"}
              value={selectedGender}
              items={genders(heroes).map((gender) => {
                return {
                  value: gender,
                  label: gender,
                };
              })}
              onChange={(value) => {
                setSelectedGender(value);
                setCurrentPage(1);
              }}
            />
            <button className={styles.clearLittleButton} onClick={() => {
                setSelectedGender(undefined)}}>reset gender</button>
            <Filter
              title={"Faculty"}
              value={selectedFaculty}
              items={faculty(heroes).map((house) => {
                return {
                  value: house,
                  label: house,
                };
              })}
              onChange={(value) => {
                setSelectedFaculty(value);
                setCurrentPage(1);
              }}
            />
            <button className={styles.clearLittleButton} onClick={() => {
                setSelectedFaculty(undefined)}}>reset faculty</button>
            <Filter
              title={"Alive"}
              value={selectedAlive}
              items={alive(heroes).map((alive) => {
                return {
                  value: alive,
                  label: alive,
                };
              })}
              onChange={(value) => {
                setSelectedAlive(value);
                setCurrentPage(1);
              }}
            />
            <button className={styles.clearLittleButton} onClick={() => {
                setSelectedAlive(undefined)}}>reset alive</button>
            <Filter
              title={"Eye color"}
              value={selectedEyeColour}
              items={eyeColour(heroes).map((eyeColour) => {
                return {
                  value: eyeColour,
                  label: eyeColour,
                };
              })}
              onChange={(value) => {
                setSelectedEyeColour(value);
                setCurrentPage(1);
              }}
            />
            <button className={styles.clearLittleButton} onClick={() => {
                setSelectedEyeColour(undefined)}}>reset eye color</button>
            <button
              className={styles.clearButton}
              onClick={() => {
                setSelectedGender(undefined);
                setSelectedColor(undefined);
                setSelectedFaculty(undefined);
                setSelectedAlive(undefined);
                setSelectedEyeColour(undefined);
              }}
            >
              reset all
            </button>
          </div>
          <ComponentHeroes heroes={currentHeroes} />
        </div>

        <Paginator
          currentHeroes={currentHeroes}
          personInPage={personInPage}
          totalHeroes={heroes.length}
          paginate={paginate}
          prevStep={prevStep}
          nextStep={nextStep}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
  const loader = (
    <div className={styles.loading}>
      <img
        className={styles.gif}
        src={require("../../image/loagingGif.gif")}
        alt="loading"
      />
      <div className={styles.subtitle}>WELCOME TO THE HOGWARDS</div>
    </div>
  );

  const content = heroes.length && !loading ? page : loader;

  return <div>{content}</div>;
};

export default MainPage;
