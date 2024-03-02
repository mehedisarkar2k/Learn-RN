import {StatusBarStyle} from 'react-native';

const baseTheme = {
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
    '2xl': 16,
    '3xl': 20,
  },
  paddings: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
    '2xl': 16,
    '3xl': 20,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    '2xl': 20,
  },
  fontSizes: {
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    '2xl': 28,
    '3xl': 32,
  },
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
    md: {
      shadowColor: '#FFFFFF90',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
} as const;

export const lightTheme = {
  colors: {
    typography: '#000000',
    background: '#ffffff',
  },
  barStyle: 'dark-content' as StatusBarStyle,
  ...baseTheme,
} as const;

export const darkTheme = {
  colors: {
    typography: '#ffffff',
    background: '#000000',
  },
  barStyle: 'light-content' as StatusBarStyle,
  ...baseTheme,
} as const;

// define other themes
