import React from 'react';
import {View} from 'react-native';
import Style from './Style';

// const Overlay = ({children, style}) => (
//   <View style={{...Style.overlay, ...style}}>
//     <View style={{flex: 1, ...Style.overlayy}} />
//     {children}
//   </View>
// );

const Overlay = ({children, style}) => (
  <View style={{...Style.overlay}}>
    <View style={{...style}} />
    <View>{children}</View>
  </View>
);

export default Overlay;
