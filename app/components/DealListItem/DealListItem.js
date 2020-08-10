import React from 'react';
import PropTypes from 'prop-types';
import {ListItem} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const DealListItem = ({header, text}) => {
  const navigation = useNavigation();

  return (
    <ListItem
      title={header}
      subtitle={text}
      bottomDivider
      chevron
      onPress={() => {
        navigation.navigate('Image');
      }}
    />
  );
};

DealListItem.propTypes = {
  text: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
};

export default DealListItem;
