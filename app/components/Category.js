import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

const Category = ({icon, header, text}) => (
  <View style={{flex: 1, flexDirection: 'row'}}>
    <Text style={{flex: 1}}>{header}</Text>
    <Text style={{flex: 1}}>{text}</Text>
  </View>
);

Category.propTypes = {
  text: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
};

export default Category;
