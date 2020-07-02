import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import DealListItem from './DealListItem';

const DATA = [
  {
    header: 'Client Name',
    description: 'Contact Info',
    id: '1',
  },
  {
    header: 'Client Name',
    description: 'Contact Info',
    id: '2',
  },
  {
    header: 'Client Name',
    description: 'Contact Info',
    id: '3',
  },
];

const styles = StyleSheet.create({
  listWrapper: {backgroundColor: '#ddd', flex: 1},
});

const DealList = () => (
  <View style={styles.listWrapper}>
    <FlatList
      data={DATA}
      renderItem={({item}) => (
        <DealListItem header={item.header} text={item.description} />
      )}
    />
  </View>
);

export default DealList;
