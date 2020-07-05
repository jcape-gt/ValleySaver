import 'react-native-gesture-handler';

import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {ListItem} from 'react-native-elements';
import Style from './Style';

const CategoryListItem = ({icon, header, text}) => {
  const navigation = useNavigation();
  
  return (
    <ListItem
      title={header}
      subtitle={text}
      leftElement={<Icon style={Style.icon} name={icon} />}
      bottomDivider
      chevron
      onPress={() => {
        navigation.navigate('Category', {name: header});
      }}
    />
  );
};

CategoryListItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
};

export default CategoryListItem;
