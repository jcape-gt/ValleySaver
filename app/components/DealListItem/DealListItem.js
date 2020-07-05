import React from 'react';
import PropTypes from 'prop-types';
import {ListItem} from 'react-native-elements';

const DealListItem = ({header, text}) => {
  return <ListItem title={header} subtitle={text} bottomDivider chevron />;
};

DealListItem.propTypes = {
  text: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
};

export default DealListItem;
