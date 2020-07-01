import React from 'react';
import {FlatList, View, Text} from 'react-native';
import Category from './Category';

const DATA = [
  {text: 'hello', id: '1'},
  {text: 'world', id: '2'},
];

const CategoriesList = () => (
  <View>
    <Text>Testing</Text>
    <FlatList
      data={DATA}
      renderItem={({item}) => <Category header={item.text} />}
    />
    <Text>Testing</Text>
  </View>
);

export default CategoriesList;
