import React from 'react';
import {View, Text} from 'react-native';
import Style from './Style';

const Footer = () => (
  <View style={Style.body}>
    <Text style={Style.description}>Copyright 2020 Verticular LLC</Text>
  </View>
);

export default Footer;
