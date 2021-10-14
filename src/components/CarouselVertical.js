import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Text } from '@ui-kitten/components';
import { Colors } from '../utils/colors';
import { CDN_IMAGE } from '@env';

const { width } = Dimensions.get('window');
const itemWidth = Math.round(width * 0.35);

const CarouselVertical = ({ data }) => {
  return (
    <Carousel
      activeSlideAlignment="start"
      layout="default"
      data={data}
      sliderWidth={width}
      itemWidth={itemWidth}
      renderItem={item => <RenderItem data={item} />}
    />
  );
};

const RenderItem = ({ data }) => {
  const { title, poster_path } = data.item;

  return (
    <TouchableNativeFeedback>
      <View style={styles.card}>
        <Image
          source={{ uri: `${CDN_IMAGE}w500/${poster_path}` }}
          style={styles.image}
        />
        <Text
          style={{ textAlign: 'center', marginTop: 10, color: '#000' }}
          category="h6">
          {title}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    borderRadius: 15,
    marginTop: 10,
  },
  card: {
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
});

export default CarouselVertical;
