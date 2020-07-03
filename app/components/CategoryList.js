import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import CategoryListItem from './CategoryListItem';

const DATA = [
  {
    header: 'All Coupons',
    description: 'Find local deals in all categories!',
    iconName: 'star',
    id: '1',
  },
  {
    header: 'Auto',
    description: 'Oil Change, Car Wash, Tires, Repair...',
    iconName: 'car',
    id: '2',
  },
  {
    header: 'Restaurants',
    description: 'blah blah blah blah blah blah',
    iconName: 'utensils',
    id: '3',
  },
  {
    header: 'Home Improvement',
    description: 'blah blah blah blah blah blah',
    iconName: 'hammer',
    id: '4',
  },
  {
    header: 'Home Services',
    description: 'blah blah blah blah blah blah',
    iconName: 'home',
    id: '5',
  },
  {
    header: '   Retail',
    description: 'blah blah blah blah blah blah',
    iconName: 'shopping-bag',
    id: '6',
  },
  {
    header: 'Garden & Landscape',
    description: 'blah blah blah blah blah blah',
    iconName: 'leaf',
    id: '7',
  },
  {
    header: 'Personal Services',
    description: 'blah blah blah blah blah blah',
    iconName: 'hands-helping',
    id: '8',
  },
];

const styles = StyleSheet.create({
  listWrapper: {backgroundColor: '#ddd', flex: 1},
});

const CategoryList = () => (
  <View style={styles.listWrapper}>
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
