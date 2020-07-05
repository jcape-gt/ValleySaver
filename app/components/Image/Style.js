import {StyleSheet} from 'react-native';
import {HorizontalContentWrapper} from '../../styles/Layout';
import {CoverImage} from '../../styles/Images';

const Style = StyleSheet.create({
  fullWidthRow: {
    ...HorizontalContentWrapper,
    flex: 1,
  },
  throwImage: {
    ...CoverImage,
    flex: 1,
  },
});

export default Style;
