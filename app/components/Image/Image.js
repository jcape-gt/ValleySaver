import React from 'react';
import {View} from 'react-native';
import BoundImage from '../../services/ImageService';
import PropTypes from 'prop-types';
import Style from './Style';

const Image = ({source, children, ...props}) => (
  <View style={Style.fullWidthRow}>
    <BoundImage source={source} style={{...Style.throwImage, ...props.style}}>
      {children}
    </BoundImage>
  </View>
);

Image.propTypes = {
  source: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string,
    }),
    PropTypes.number,
    PropTypes.string,
  ]),
  children: PropTypes.node,
};

export default Image;
