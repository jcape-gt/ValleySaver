import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Header = () => (
  <View style={styles.row}>
    <Image style={styles.logo} source={require('../resources/logo1.png')} />
  </View>
);

const styles = StyleSheet.create({
  logo: {
    maxHeight: '100%',
    resizeMode: 'contain',
    flex: 1,
  },
  row: {flex: 1, flexDirection: 'row'},
});

export default Header;
