import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

const Category = ({icon, header, text}) => (
  <View style={styles.body}>
    <View style={styles.iconWrapper}>
      <Icon style={styles.icon} name={icon} />
    </View>
    <View style={styles.contentWrapper}>
      <Text style={styles.header}>{header}</Text>
      <Text style={styles.description}>{text}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  body: {flex: 1, flexDirection: 'row', margin: 5, backgroundColor: '#f1f1f1'},
  iconWrapper: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  icon: {fontSize: 25},
  contentWrapper: {flex: 6, flexDirection: 'column'},
  header: {flex: 1, fontWeight: 'bold', fontFamily: 'sans-serif-light'},
  description: {flex: 1, fontSize: 12, fontFamily: 'sans-serif-light'},
});

Category.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
};

export default Category;
