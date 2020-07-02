import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  listWrapper: {backgroundColor: '#ddd', flex: 1},
});

const Category = ({name = 'blank'}) => (
  <View style={styles.listWrapper}>
    <Text>{name}</Text>
  </View>
);

Category.propTypes = {
  name: PropTypes.string,
};

export default Category;
