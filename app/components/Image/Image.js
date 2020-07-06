import React from 'react';
import {View} from 'react-native';
import BoundImage from '../../services/ImageService';
import PropTypes from 'prop-types';
import Style from './Style';

const show = (a, b) => {
  console.log('show');
  console.log(a);
  console.log(b);
  var result = {...a, ...b};
  console.log(result);
  return result;
};

const Image = ({source, children, ...props}) => (
  <View style={Style.fullWidthRow}>
    <BoundImage require={source} style={{...Style.throwImage, ...props.style}}>
      {children}
    </BoundImage>
  </View>
);

Image.propTypes = {
  source: PropTypes.shape({
    source: PropTypes.number, // require() resolves to a number
  }),
  children: PropTypes.node,
};

export default Image;
