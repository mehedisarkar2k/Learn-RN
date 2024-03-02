import Container from '@/layout/Container';
import MainLayout from '@/layout/MainLayout';
import {useThemeStore} from '@/store/themeStore';
import {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import IonIcon from 'react-native-vector-icons/Ionicons';

const Home: FC = () => {
  const {styles} = useStyles(stylesSheet);
  const theme = useThemeStore(state => state.theme);
  const setTheme = useThemeStore(state => state.setTheme);

  return (
    <MainLayout>
      <Container style={[styles.container]}>
        <Text>Change Theme</Text>

        <View style={styles.themeController}>
          {!(theme === 'dark') ? (
            <Pressable onPress={() => setTheme('dark')}>
              <IonIcon style={styles.icon} name="moon" size={26} />
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                setTheme('light');
              }}>
              <IonIcon style={styles.icon} name="sunny" size={30} />
            </Pressable>
          )}

          <Pressable
            onPress={() => {
              setTheme('system');
            }}>
            <IonIcon style={styles.icon} name="settings" size={28} />
          </Pressable>
        </View>
      </Container>
    </MainLayout>
  );
};

export default Home;

const stylesSheet = createStyleSheet(theme => ({
  container: {
    backgroundColor: theme.colors.background,
    padding: theme.paddings.xl,
    ...theme.shadows.md,
  },
  themeController: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: theme.margins['3xl'],
    marginTop: theme.margins.xl,
  },
  icon: {
    color: theme.colors.typography,
  },
}));
