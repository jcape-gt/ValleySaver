import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => (
  <View style={styles.row}>
    <View style={styles.iconWrapper}>
      <Icon style={styles.icon} name="menu" />
    </View>
    <Image style={styles.logo} source={require('../resources/logo1.png')} />
  </View>
);

const styles = StyleSheet.create({
  logo: {
    maxHeight: '100%',
    resizeMode: 'contain',
    flex: 7,
  },
  row: {flex: 1, flexDirection: 'row'},
  icon: {fontSize: 25},
  iconWrapper: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default Header;
