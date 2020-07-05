import React from 'react';
import {View} from 'react-native';
import Style from './Style';

const Overlay = ({children, style}) => (
  <View style={{...Style.overlay}}>
    <View style={{...Style.wrapper, ...style}} />
    <View style={{...Style.overlay}}>{children}</View>
  </View>
);

export default Overlay;
