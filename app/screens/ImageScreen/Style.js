import {StyleSheet} from 'react-native';
import {
  HorizontalContentWrapper,
  VerticalContentWrapper,
  FullWrapper,
} from '../../styles/Layout';

const Style = StyleSheet.create({
  fullWidthRow: {
    ...HorizontalContentWrapper,
    ...FullWrapper,
  },
  page: {
    ...FullWrapper,
  },
  imageContainer: {
    flex: 3,
  },
  image: {
    aspectRatio: 2,
  },
  body: {
    ...VerticalContentWrapper,
    flex: 10,
  },
  listWrapper: {
    flex: 7,
  },
  overlay: {
    backgroundColor: 'black',
    opacity: 0.5,
  },
});

export default Style;
