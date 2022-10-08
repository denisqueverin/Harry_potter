import { useRoutes } from "react-router-dom";
import Favorites from "./pages/favorites//Favorites";
import Hero from "./pages/hero/Hero";
import MainPage from "./pages/mainPage/MainPage";
import PageNotFound from "./pages/notFound/PageNotFound";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { fetchHeroes } from "./redux/heroes/actions";
import { FavoritesContext } from "./utils/FavotiterContext";

const App = () => {
  const dispatch = useDispatch();
  const [favorites, setFavorites] = useState(null);

  useEffect(() => {
    dispatch(fetchHeroes());
  }, []);

  useEffect(() => {
    const tempArg = JSON.parse(localStorage.getItem("fav"));

    if (tempArg) {
      setFavorites(tempArg);
    }
  }, []);

  useEffect(() => {
    if (Array.isArray(favorites)) {
      localStorage.setItem("fav", JSON.stringify(favorites));
    }
  }, [favorites]);

  const handleAddFavorites = React.useCallback(
    (hero) => {
      if ((favorites || []).map((o) => o.name).includes(hero.name)) {
        const newArr = favorites.filter((el) => el.name !== hero.name);
        setFavorites(newArr);

        return;
      }

      setFavorites([
        ...(favorites || []),
        {
          name: hero.name,
          image: hero.image,
        },
      ]);
    },
    [favorites]
  );

  let element = useRoutes([
    {
      path: "/",
      element: <MainPage />,
    },
    { path: "hero/:name", element: <Hero />, exact: true },
    { path: "*", element: <PageNotFound /> },
    { path: "favorites/*", element: <PageNotFound /> },
    { path: "favorites", element: <Favorites /> },
  ]);

  return (
    <FavoritesContext.Provider
      value={{
        list: favorites || [],
        addFavorites: handleAddFavorites,
      }}
    >
      {element}
    </FavoritesContext.Provider>
  );
};

export default App;
