import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CategoryList from '../../components/CategoryList';
import Image from '../../components/Image';
import {ImageProvider} from '../../services/ImageService';
import Overlay from '../../components/Overlay';
import Style from './Style';

const Body = () => (
  <View style={Style.body}>
    <View style={Style.imageContainer}>
      <Image source={ImageProvider.throwImages.home} style={Style.image} />
      <Overlay style={Style.overlayy}>
        <Text style={{flex: 1, color: 'white', opacity: 1}}>Hello</Text>
      </Overlay>
    </View>
    <View style={Style.listWrapper}>
      <CategoryList />
    </View>
    <View style={Style.fullWidthRow}>
      <Footer />
    </View>
  </View>
);

const HomeScreen = () => (
  <View style={Style.page}>
    <Header />
    <Body />
  </View>
);

export default HomeScreen;
