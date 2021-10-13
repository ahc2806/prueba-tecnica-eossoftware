import React from 'react';
import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

export default App = () => {
  return (
    <SafeAreaProvider>
      <ApplicationProvider {...eva} theme={eva.dark}>
        <NavigationContainer>
          <Layout
            style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text>ESO Software</Text>
          </Layout>
        </NavigationContainer>
      </ApplicationProvider>
    </SafeAreaProvider>
  );
};
