import {FC, PropsWithChildren} from 'react';
import {StatusBar, StyleProp, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const MainLayout: FC<PropsWithChildren<Props>> = ({children, style}) => {
  const {
    styles,
    theme: {colors, barStyle},
  } = useStyles(styleSheet);

  return (
    <SafeAreaView style={[styles.container, style]}>
      {children}
      <StatusBar
        barStyle={barStyle}
        animated
        networkActivityIndicatorVisible
        backgroundColor={colors.background}
      />
    </SafeAreaView>
  );
};

export default MainLayout;

const styleSheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
}));
