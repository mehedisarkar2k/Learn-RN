import {FC, PropsWithChildren} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

interface IContainerProps {
  style?: StyleProp<ViewStyle>;
}

const Container: FC<PropsWithChildren<IContainerProps>> = ({
  style,
  children,
}) => {
  const {styles} = useStyles(stylesSheet);

  const combinedStyles = StyleSheet.compose(styles.container, style);

  return <View style={combinedStyles}>{children}</View>;
};

export default Container;

const stylesSheet = createStyleSheet(theme => ({
  container: {
    padding: theme.paddings.lg,
    margin: theme.margins.md,
    marginHorizontal: theme.margins['3xl'],
  },
}));
