import React from 'react';
import {View, Image} from 'react-native';
import {Header as HeaderElement} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Style from './Style';

const HeaderIcon = () => <Icon style={Style.icon} name="bars" />;

const HeaderLogo = () => (
  <View style={Style.logoWrapper}>
    <Image style={Style.logo} source={require('../../resources/logo1.png')} />
  </View>
);

const HeaderAttrs = {
  containerStyle: Style.body,
  leftComponent: <HeaderIcon />,
  centerComponent: <HeaderLogo />,
};

const Header = () => <HeaderElement {...HeaderAttrs} />;

export default Header;
