import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { Container } from '../components';
import { Colors } from '../utils/colors';

const HomeScreen = () => {
  return (
    <Container
      activeBar
      themeBar="dark"
      colorBar={Colors.white}
      withHeader
      backgroundColor={Colors.white}>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text>ESO Software</Text>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
