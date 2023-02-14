import { Link } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router/ui/AppRouter";
import { Navbar } from "widjets/NavBar";
import { ThemeSwitcher } from "widjets/ThemeSwitcher";

const App = () => {
 
  const { theme } = useTheme();
  
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      
    </div>
  );
};

export default App;
