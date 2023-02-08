import { Suspense, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Counter from "./componets/Counter";
import "./styles/index.scss";
import AboutPage from "./pages/AboutPAges/AboutPage";
import { AboutPageasync } from "./pages/AboutPAges/AboutPage.async";
import MainPage from "./pages/MainPages/MainPage";
import { MainPageasync } from "./pages/MainPages/MainPage.async";
import { Theme, ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <div className="page">
        <Link to={"/"}>Главная</Link>
        <Link to={"/about"}>О сайте</Link>

        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path="/" element={<MainPageasync />} />
            <Route path="/about" element={<AboutPageasync />} />
          </Routes>
        </Suspense>
      </div>
      <div className="button">
        <button onClick={toggleTheme}>Переключить тему</button>
      </div>
    </div>
  );
};

export default App;
