import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LightText} from '../styles/Typography';

const Footer = () => (
  <View style={styles.body}>
    <Text style={styles.description}>Copyright 2020 Verticular LLC</Text>
  </View>
);

const styles = StyleSheet.create({
  body: {flex: 1, backgroundColor: '#26abff'},
  description: {
    ...LightText,
    padding: 20,
  },
});

export default Footer;
