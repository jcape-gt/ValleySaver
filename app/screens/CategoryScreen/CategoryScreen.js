import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import DealList from '../../components/DealList';
import Image from '../../components/Image';
import {ImageProvider} from '../../services/ImageService';
import Overlay from '../../components/Overlay';
import Style from './Style';

const OverlayContent = ({name}) => (
  <View style={{flex: 1, justifyContent: 'center', padding: 20}}>
    <Text style={{color: 'white', fontSize: 25}}>Great deals on</Text>
    <Text style={{color: 'white', fontSize: 25}}>{name}</Text>
  </View>
);

const Body = ({name = 'Category'}) => (
  <View style={Style.body}>
    <View style={Style.imageContainer}>
      <Image source={ImageProvider.throwImages.home} style={Style.image} />
      <Overlay style={Style.overlay}>
        <OverlayContent name={name} />
      </Overlay>
    </View>
    <View style={Style.listWrapper}>
      <DealList />
    </View>
    <View style={Style.fullWidthRow}>
      <Footer />
    </View>
  </View>
);

const CategoryScreen = ({route}) => {
  console.log('name');
  console.log(name);
  const {name} = route.params;

  return (
    <View style={Style.page}>
      <Header />
      <Body name={name} />
    </View>
  );
};

// const CategoryScreen = ({name}) => (
//   <View style={Style.page}>
//     <Header />
//     <Body name={name} />
//   </View>
// );

export default CategoryScreen;
