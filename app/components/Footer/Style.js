import {StyleSheet} from 'react-native';
import {LightText} from '../../styles/Typography';

const Style = StyleSheet.create({
  body: {backgroundColor: '#26abff', flex: 1},
  description: {
    ...LightText,
    padding: 20,
  },
});

export default Style;
