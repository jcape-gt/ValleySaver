import 'react-native-gesture-handler';
import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Header from '../components/Header';
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
  body: {
    ...VerticalContentWrapper,
    flex: 10,
  },
  description: {
    ...LightText,
    padding: 20,
  },
});

const Body = ({name}) => (
  <View style={styles.body}>
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
    <View style={{flex: 1, backgroundColor: '#26abff'}}>
      <Text style={styles.description}>Copyright 2020 Verticular LLC</Text>
    </View>
  </View>
);

const CategoryScreen = ({route}) => {
  const {name} = route.params;
  console.log('Category Screen');
  console.log(name);
  return (
    <View style={styles.page}>
      <Header />
      <Body name={name} />
    </View>
  );
};

CategoryScreen.propTypes = {
  name: PropTypes.string,
};

export default CategoryScreen;
