const genders = (heroes) => heroes.reduce((acc, hero) => {
    if (acc.includes(hero.gender) || !hero.gender) {
        return acc;
    }
    
    return [...acc, hero.gender];
}, []);

const eyeColour = (heroes) => heroes.reduce((acc, hero) => {
    if (acc.includes(hero.eyeColour) || !hero.eyeColour) {
        return acc;
    }

    return [...acc, hero.eyeColour];
}, []);

const alive = (heroes) => heroes.reduce((acc, hero) => {
    if (acc.includes(`${hero.alive}`)) {
        return acc;
    }

    return[...acc, `${hero.alive}`];
}, []);

const faculty = (heroes) => heroes.reduce((acc, hero) => {
    if (acc.includes(hero.house) || !hero.house) {
        return acc;
    }

    return[...acc, hero.house];
}, []);

const hairColors = (heroes) => heroes.reduce((acc, hero) => {
    if (acc.includes(hero.hairColour) || !hero.hairColour) {
        return acc;
    }

    return [...acc, hero.hairColour];
}, []);
    
const heroesFilters = ( heroes, selectedGender, selectedAlive, selectedColor, selectedEyeColour, selectedFaculty, firstHeroesIndex, lastHeroesIndex) => {
    const filteredHairColor =
        selectedColor === undefined
            ? heroes
            : heroes.filter((el) => el.hairColour === selectedColor);

    const filtersGender =
        selectedGender === undefined
            ? filteredHairColor
            : filteredHairColor.filter((el) => el.gender === selectedGender);

    const filterFaculty =
        selectedFaculty === undefined
            ? filtersGender
            : filtersGender.filter((el) => el.house === selectedFaculty);

    const filterAlive =
        selectedAlive === undefined
            ? filterFaculty
            : filterFaculty.filter((el) => `${el.alive}` === selectedAlive);

    const filterEyeColour =
        selectedEyeColour === undefined
            ? filterAlive
            : filterAlive.filter((el) => el.eyeColour === selectedEyeColour);

    const currentHeroes = filterEyeColour.slice(firstHeroesIndex, lastHeroesIndex);

    return currentHeroes
}

export { heroesFilters, genders, alive, eyeColour, faculty, hairColors }