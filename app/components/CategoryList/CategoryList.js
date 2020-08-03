import 'react-native-gesture-handler';

import React from 'react';
import {FlatList, View} from 'react-native';
import CategoryListItem from '../CategoryListItem';
import Style from './Style';

const CategoryList = ({categories}) => (
  <View style={Style.listWrapper}>
    <FlatList
      data={categories}
      renderItem={({item}) => (
        <CategoryListItem
          header={item.name}
          text={item.description}
          icon={item.icon_class}
          id={item.id}
        />
      )}
    />
  </View>
);

export default CategoryList;
