import React from 'react';
import PropTypes from 'prop-types';
import {ListItem} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const DealListItem = ({deal}) => {
  const navigation = useNavigation();

  return (
    <ListItem
      title={deal.name}
      subtitle={deal.address}
      bottomDivider
      chevron
      onPress={() => {
        navigation.navigate('Image', {deal: deal});
      }}
    />
  );
};

DealListItem.propTypes = {
  deal: PropTypes.object.isRequired,
};

export default DealListItem;
