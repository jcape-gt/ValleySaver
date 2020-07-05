import 'react-native-gesture-handler';
import React from 'react';
import {View, Image} from 'react-native';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DealList from '../../components/DealList';
import PropTypes from 'prop-types';
import Style from './Style';

const Body = ({name}) => (
  <View style={Style.body}>
    <View style={Style.imageContainer}>
      <View style={Style.fullWidthRow}>
        <Image
          style={Style.throwImage}
          source={require('../../resources/shopping.jpeg')}
        />
      </View>
    </View>
    <View style={{flex: 7}}>
      <DealList />
    </View>
  </View>
);

const CategoryScreen = ({route}) => {
  const {name} = route.params;
  return (
    <View style={Style.page}>
      <View style={{flex: 1}}>
        <Header />
      </View>
      <View style={Style.mainContent}>
        <Body name={name} />
      </View>
      <View style={{flex: 1}}>
        <Footer />
      </View>
    </View>
  );
};

CategoryScreen.propTypes = {
  name: PropTypes.string,
};

export default CategoryScreen;
