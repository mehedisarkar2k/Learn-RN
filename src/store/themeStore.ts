import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {zustandStorage} from '.';
import {THEME} from '@/constant';

const useThemeStore = create<IThemeStore>()(
  persist(
    set => ({
      theme: THEME.System,
      setTheme: theme => set({theme}),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);

export {useThemeStore};
