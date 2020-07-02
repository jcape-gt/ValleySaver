import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Header from './components/Header';
import CategoriesList from './components/CategoriesList';

const styles = StyleSheet.create({
  logo: {
    maxHeight: '100%',
    resizeMode: 'contain',
    flex: 1,
  },
  row: {flex: 1, flexDirection: 'row'},
  fullWidthRow: {flex: 1, flexDirection: 'row', overflow: 'hidden'},
  throwImage: {
    height: undefined,
    width: undefined,
    resizeMode: 'cover',
    aspectRatio: 2,
    flex: 1,
  },
  page: {
    flex: 1,
  },
  imageContainer: {
    flex: 3,
  },
  body: {
    flex: 10,
    flexDirection: 'column',
  },
  description: {
    flex: 1,
    fontSize: 12,
    fontFamily: 'sans-serif-light',
    color: '#f6f6f6',
    padding: 20,
  },
});

const Body = () => (
  <View style={styles.body}>
    <View style={styles.imageContainer}>
      <View style={styles.fullWidthRow}>
        <Image
          style={styles.throwImage}
          source={require('./resources/colga.jpg')}
        />
      </View>
    </View>
    <View style={{flex: 7}}>
      <CategoriesList />
    </View>
    <View style={{flex: 1, backgroundColor: '#26abff'}}>
      <Text style={styles.description}>Copyright 2020 Verticular LLC</Text>
    </View>
  </View>
);

const App = () => (
  <View style={styles.page}>
    <Header />
    <Body />
  </View>
);

export default App;
