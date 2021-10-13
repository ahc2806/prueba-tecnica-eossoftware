import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

const DashboardNav = () => {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
};

export default DashboardNav;
