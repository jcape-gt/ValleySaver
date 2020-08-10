import React from 'react';
import {FlatList, View} from 'react-native';
import DealListItem from '../DealListItem';
import Style from './Style';
import {DATA} from './Default';

const DealList = ({deals = DATA}) => (
  <View style={Style.listWrapper}>
    <FlatList
      data={deals}
      renderItem={({item}) => (
        <DealListItem header={item.name} text={item.address} />
      )}
    />
  </View>
);

export default DealList;
