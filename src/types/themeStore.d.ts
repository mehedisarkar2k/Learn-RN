type Theme = 'light' | 'dark' | 'system';

interface IThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
