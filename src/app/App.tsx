import { Link } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router/ui/AppRouter";
import { Navbar } from "widjets/NavBar";
import { Sidebar } from "widjets/Sidebar/ui/Sidebar/Sidebar";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

const Component = ( ) =>{
  const {t, i18n} = useTranslation();
  const toggle = ( ) =>{
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  }

  return(
    <div>
      
    </div>
  )
}

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <Component />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
