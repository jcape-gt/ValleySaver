import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Header as HeaderElement} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  icon: {fontSize: 25},
  logo: {
    maxHeight: '100%',
    resizeMode: 'contain',
  },
  logoWrapper: {
    flex: 1,
  },
  body: {
    backgroundColor: '#ffffff',
  },
});

const HeaderIcon = () => <Icon style={styles.icon} name="bars" />;

const HeaderLogo = () => (
  <View style={styles.logoWrapper}>
    <Image style={styles.logo} source={require('../resources/logo1.png')} />
  </View>
);

const HeaderAttrs = {
  containerStyle: styles.body,
  leftComponent: <HeaderIcon />,
  centerComponent: <HeaderLogo />,
};

const Header = () => <HeaderElement {...HeaderAttrs} />;

export default Header;
