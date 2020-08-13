import React from 'react';
import {ImageBackground, View} from 'react-native';
import PropTypes from 'prop-types';

// export const ImageProvider = {
//   throwImages: {
//     home: {
//       source: require('../resources/colga.jpg'),
//     },
//   },
// };

export const ImageProvider = {
  throwImages: {
    home: require('../resources/colga.jpg'),
  },
  headerImage: require('../resources/logo1.png'),
};

const BoundImage = ({source, ...props}) => (
  <View style={{flex: 1}}>
    <ImageBackground source={source} {...props} />
  </View>
);

// BoundImage.propTypes = {
//   require: PropTypes.shape({
//     source: PropTypes.number, // require() resolves to a number
//   }),
// };

export default BoundImage;
