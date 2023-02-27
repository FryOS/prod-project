import { classNames } from "shared/lib/classNames/classNames";
// import LightIcon from 'shared/assets/icons/heme-light.svg';
import DarkIcon from "shared/assets/icons/toggle-on.svg";
import LightIcon from "shared/assets/icons/toggle-off.svg";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Button
        theme={ThemeButton.CLEAR}
        className={classNames("", {}, [className])}
        onClick={toggleTheme}
      >
        {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
      </Button>
    </>
  );
};

export default ThemeSwitcher;
