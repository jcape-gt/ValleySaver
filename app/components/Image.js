import React from 'react';
import {View, StyleSheet} from 'react-native';
import {HorizontalContentWrapper} from '../styles/Layout';
import {CoverImage} from '../styles/Images';
import BoundImage from '../services/ImageService';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  fullWidthRow: {
    ...HorizontalContentWrapper,
    flex: 1,
  },
  throwImage: {
    ...CoverImage,
    flex: 1,
  },
});

const Image = ({source, imageStyle}) => (
  <View style={styles.fullWidthRow}>
    <BoundImage
      require={source}
      style={{...styles.throwImage, ...imageStyle}}
    />
  </View>
);

Image.propTypes = {
  source: PropTypes.shape({
    source: PropTypes.number, // require() resolves to a number
  }),
  children: PropTypes.node,
};

export default Image;
