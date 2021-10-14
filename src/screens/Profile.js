import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, useTheme } from '@ui-kitten/components';
import { Container } from '../components';
import { Colors } from '../utils/colors';

const ProfileScreen = ({ navigation }) => {
  const theme = useTheme();

  return (
    <Container
      activeBar
      themeBar="light"
      colorBar={theme['color-primary-900']}
      withHeader
      propsHeader={{
        title: 'Cartelera',
        navigation,
        activeArrow: !true,
        style: { paddingHorizontal: 20 },
      }}
      backgroundColor={Colors.white}>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text style={{ color: theme['color-basic-800'] }}>Perfil</Text>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default ProfileScreen;
