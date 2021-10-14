import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, useTheme } from '@ui-kitten/components';
import { Container, CarouselVertical } from '../components';
import { Colors } from '../utils/colors';
import { getNewsMovies } from '../services/movies';

const HomeScreen = ({ navigation }) => {
  const theme = useTheme();

  const [newMovies, setNewMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getNewsMovies();
      setNewMovies(response.results);
    };

    fetchData();
  }, []);

  return (
    <Container
      activeBar
      themeBar="light"
      colorBar={theme['color-primary-900']}
      withHeader
      withScroll
      propsHeader={{
        title: 'Cartelera',
        navigation,
        activeArrow: !true,
        style: { paddingHorizontal: 40 },
      }}
      backgroundColor={Colors.white}>
      <View style={{ marginTop: 50 }}>
        <Text style={{ color: theme['color-basic-800'] }} category="h5">
          Películas recientes
        </Text>

        <CarouselVertical data={newMovies} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
