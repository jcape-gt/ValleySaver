import React from 'react';
import {FlatList, View, Text} from 'react-native';
import Category from './Category';

const DATA = [
  {
    header: 'All Coupons',
    description: 'Find local deals in all categories!',
    id: '1',
  },
  {
    header: 'Auto',
    description: 'Oil Change, Car Wash, Tires, Repair...',
    id: '2',
  },
];

const CategoriesList = () => (
  <View>
    <Text>Testing</Text>
    <FlatList
      data={DATA}
      renderItem={({item}) => (
        <Category header={item.header} text={item.description} />
      )}
    />
    <Text>Testing</Text>
  </View>
);

export default CategoriesList;
