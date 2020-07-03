import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CategoryList from '../components/CategoryList';
import {
  HorizontalContentWrapper,
  VerticalContentWrapper,
  FullWrapper,
} from '../styles/Layout';
import Image from '../components/Image';
import {ImageProvider} from '../services/ImageService';

const styles = StyleSheet.create({
  fullWidthRow: {
    ...HorizontalContentWrapper,
    ...FullWrapper,
  },
  page: {
    ...FullWrapper,
  },
  imageContainer: {
    flex: 3,
  },
  image: {
    aspectRatio: 2,
  },
  body: {
    ...VerticalContentWrapper,
    flex: 10,
  },
  listWrapper: {
    flex: 7,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'red',
    opacity: 0.3,
  },
});

const Body = () => (
  <View style={styles.body}>
    <View style={styles.imageContainer}>
      <Image source={ImageProvider.throwImages.home} imageStyle={styles.image}>
        <View style={styles.overlay} />
      </Image>
    </View>
    <View style={styles.listWrapper}>
      <CategoryList />
    </View>
    <View style={styles.fullWidthRow}>
      <Footer />
    </View>
  </View>
);

const HomeScreen = () => (
  <View style={styles.page}>
    <Header />
    <Body />
  </View>
);

export default HomeScreen;
