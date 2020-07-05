import 'react-native-gesture-handler';

import React from 'react';
import {FlatList, View} from 'react-native';
import CategoryListItem from '../CategoryListItem';
import {DATA} from './Default';
import Style from './Style';

const CategoryList = () => (
  <View style={Style.listWrapper}>
    <FlatList
      data={DATA}
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

export default CategoryList;
