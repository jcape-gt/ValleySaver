import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {ListItem} from 'react-native-elements';

const CategoryListItem = ({icon, header, text}) => {
  const navigation = useNavigation();

  return (
    <ListItem
      title={header}
      subtitle={text}
      leftElement={<Icon style={styles.icon} name={icon} />}
      bottomDivider
      chevron
      onPress={() => {
        navigation.navigate('Category', {name: text});
      }}
    />
  );
};

const styles = StyleSheet.create({
  icon: {fontSize: 25},
});

CategoryListItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
};

export default CategoryListItem;
