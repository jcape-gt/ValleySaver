import 'react-native-gesture-handler';
import React from 'react';
import {FlatList, View} from 'react-native';
import CategoryListItem from '../CategoryListItem';
import {DATA} from './Default';
import Style from './Style';
import PropTypes from 'prop-types';

const CategoryList = ({categories = DATA}) => (
  <View style={Style.listWrapper}>
    <FlatList
      data={categories}
      renderItem={({item}) => (
        <CategoryListItem
          header={item.header}
          text={item.description}
          icon={item.iconName}
        />
      )}
    />
  </View>
);

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};

export default CategoryList;
