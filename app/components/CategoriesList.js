import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import Category from './Category';

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
    iconName: 'silverware',
    id: '1',
  },
  {
    header: 'Home Improvement',
    description: 'blah blah blah blah blah blah',
    iconName: 'hammer',
    id: '2',
  },
  {
    header: 'Home Services',
    description: 'blah blah blah blah blah blah',
    iconName: 'home',
    id: '1',
  },
  {
    header: 'Retail',
    description: 'blah blah blah blah blah blah',
    iconName: 'shopping',
    id: '2',
  },
  {
    header: 'Garden & Landscape',
    description: 'blah blah blah blah blah blah',
    iconName: 'leaf',
    id: '1',
  },
  {
    header: 'Personal Services',
    description: 'blah blah blah blah blah blah',
    iconName: 'account',
    id: '2',
  },
];

const styles = StyleSheet.create({
  listWrapper: {backgroundColor: '#ddd', flex: 1},
});

const CategoriesList = () => (
  <View style={styles.listWrapper}>
    <FlatList
      data={DATA}
      renderItem={({item}) => (
        <Category
          header={item.header}
          text={item.description}
          icon={item.iconName}
        />
      )}
    />
  </View>
);

export default CategoriesList;
