import React from 'react';
import {FlatList, View} from 'react-native';
import DealListItem from '../DealListItem';
import Style from './Style';
import {DATA} from './Default';

const DealList = () => (
  <View style={Style.listWrapper}>
    <FlatList
      data={DATA}
      renderItem={({item}) => (
        <DealListItem header={item.header} text={item.description} />
      )}
    />
  </View>
);

export default DealList;
