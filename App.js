import React from 'react';
import * as eva from '@eva-design/eva';
import { DashboardNav } from './src/routes';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

export default App = () => {
  return (
    <SafeAreaProvider>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Navigator
            initialRouteName="Dashboard"
            screenOptions={{ headerShown: false }}>
            <Screen name="Dashboard" component={DashboardNav} />
          </Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </SafeAreaProvider>
  );
};
