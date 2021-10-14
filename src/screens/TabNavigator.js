import React from 'react';
import HomeScreen from './Home';
import ProfileScreen from './Profile';
import { Colors } from '../utils/colors';
import { useTheme } from '@ui-kitten/components';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const theme = useTheme();
const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigatorScreen = () => {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = 'film';
          } else if (route.name === 'ProfileTab') {
            iconName = 'user';
          }

          return (
            <FontAwesome5
              name={iconName}
              size={size - 3}
              color={color}
              solid={focused}
            />
          );
        },
        tabBarActiveTintColor: theme['color-primary-default'],
        tabBarInactiveTintColor: Colors.gray2,
        headerShown: false,
      })}>
      <Screen
        name="HomeTab"
        component={HomeScreen}
        options={{ headerShown: false, title: 'Cartelera' }}
      />
      <Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{ headerShown: false, title: 'Perfil' }}
      />
    </Navigator>
  );
};

export default TabNavigatorScreen;
