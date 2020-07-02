import 'react-native-gesture-handler';
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryList from '../components/CategoryList';
import {
  HorizontalContentWrapper,
  VerticalContentWrapper,
  FullWrapper,
} from '../styles/Layout';
import {CoverImage} from '../styles/Images';

const styles = StyleSheet.create({
  fullWidthRow: {
    ...HorizontalContentWrapper,
    flex: 1,
  },
  throwImage: {
    ...CoverImage,
    aspectRatio: 2,
    flex: 1,
  },
  page: {
    ...FullWrapper,
  },
  imageContainer: {
    flex: 3,
  },
  body: {
    ...VerticalContentWrapper,
    flex: 10,
  },
  listWrapper: {
    flex: 7,
  },
});

const Body = () => (
  <View style={styles.body}>
    <View style={styles.imageContainer}>
      <View style={styles.fullWidthRow}>
        <Image
          style={styles.throwImage}
          source={require('../resources/colga.jpg')}
        />
      </View>
    </View>
    <View style={styles.listWrapper}>
      <CategoryList />
    </View>
    <Footer />
  </View>
);

const HomeScreen = () => (
  <View style={styles.page}>
    <Header />
    <Body />
  </View>
);

export default HomeScreen;
