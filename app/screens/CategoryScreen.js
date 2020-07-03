import 'react-native-gesture-handler';
import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DealList from '../components/DealList';
import PropTypes from 'prop-types';
import {LightText} from '../styles/Typography';
import {
  HorizontalContentWrapper,
  VerticalContentWrapper,
  FullWrapper,
} from '../styles/Layout';
import {CoverImage} from '../styles/Images';

const styles = StyleSheet.create({
  logo: {
    ...FullWrapper,
    maxHeight: '100%',
    resizeMode: 'contain',
  },
  fullWidthRow: {
    ...HorizontalContentWrapper,
    flex: 1,
  },
  throwImage: {
    ...CoverImage,
    ...FullWrapper,
    aspectRatio: 2,
  },
  page: {
    ...FullWrapper,
  },
  imageContainer: {
    flex: 3,
  },
  mainContent: {
    ...VerticalContentWrapper,
    flex: 10,
  },
  description: {
    ...LightText,
    padding: 20,
  },
});

const Body = ({name}) => (
  <View style={FullWrapper}>
    <View style={styles.imageContainer}>
      <View style={styles.fullWidthRow}>
        <Image
          style={styles.throwImage}
          source={require('../resources/shopping.jpeg')}
        />
      </View>
    </View>
    <View style={{flex: 7}}>
      <DealList />
    </View>
  </View>
);

const CategoryScreen = ({route}) => {
  const {name} = route.params;
  return (
    <View style={styles.page}>
      <View style={{flex: 1}}>
        <Header />
      </View>
      <View style={styles.mainContent}>
        <Body name={name} />
      </View>
      <View style={{flex: 1}}>
        <Footer />
      </View>
    </View>
  );
};

CategoryScreen.propTypes = {
  name: PropTypes.string,
};

export default CategoryScreen;
