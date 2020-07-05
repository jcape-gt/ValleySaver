import React from 'react';
import {ImageBackground, View} from 'react-native';
import PropTypes from 'prop-types';

export const ImageProvider = {
  throwImages: {
    home: {
      source: require('../resources/colga.jpg'),
    },
  },
};

const BoundImage = ({require, ...props}) => (
  <View style={{flex: 1}}>
    <ImageBackground {...require} {...props} />
  </View>
);

BoundImage.propTypes = {
  require: PropTypes.shape({
    source: PropTypes.number, // require() resolves to a number
  }),
};

export default BoundImage;
