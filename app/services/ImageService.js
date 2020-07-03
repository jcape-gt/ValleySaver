import React from 'react';
import {Image} from 'react-native';
import PropTypes from 'prop-types';

export const ImageProvider = {
  throwImages: {
    home: {
      source: require('../resources/colga.jpg'),
    },
  },
};

const BoundImage = ({require, ...props}) => <Image {...require} {...props} />;

BoundImage.propTypes = {
  require: PropTypes.shape({
    source: PropTypes.number, // require() resolves to a number
  }),
};

export default BoundImage;
