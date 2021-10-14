import React from 'react';
import { TabNavigatorScreen } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

const DashboardNav = () => {
  return (
    <Navigator
      initialRouteName="TabNavigator"
      screenOptions={{ headerShown: false }}>
      <Screen name="TabNavigator" component={TabNavigatorScreen} />
    </Navigator>
  );
};

export default DashboardNav;
