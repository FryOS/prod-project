import { useTranslation } from "react-i18next";
import { classNames as cn } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "../Button/Button";
import styles from "./LangSwitcher.module.scss";

export interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    
      <Button
        className={cn(styles.LangSwitcher, {}, [className])}
        theme={ThemeButton.CLEAR}
        onClick={toggle}
      >
        {t("Язык")}
      </Button>
    
  );
};
