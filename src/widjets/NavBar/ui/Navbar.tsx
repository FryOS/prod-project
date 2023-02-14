import App from "app/App";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widjets/ThemeSwitcher";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={classNames(cls.links)}>
        <AppLink
          theme={AppLinkTheme.PRIMARY}
          className={classNames(cls.mainLink)}
          to={"/"}
        >
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.RED} to={"/about"}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
