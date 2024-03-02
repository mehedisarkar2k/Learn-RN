import {FC, useLayoutEffect} from 'react';
import '@/styles/unistyles';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import Home from '@/screen/Home';
import {useThemeStore} from '@/store/themeStore';
import {UnistylesRuntime} from 'react-native-unistyles';
import {THEME} from '@/constant';
import {useColorScheme} from 'react-native';

const App: FC = () => {
  const theme = useThemeStore(state => state.theme);
  const systemTheme = useColorScheme();

  useLayoutEffect(() => {
    if (theme === THEME.System) {
      UnistylesRuntime.setTheme(
        systemTheme === 'dark' ? THEME.Dark : THEME.Light,
      );
    } else {
      UnistylesRuntime.setTheme(theme);
    }
  }, [theme, systemTheme]);

  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
};

export default App;
