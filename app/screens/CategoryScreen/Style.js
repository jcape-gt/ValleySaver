// import {StyleSheet} from 'react-native';

// import {LightText} from '../../styles/Typography';
// import {
//   HorizontalContentWrapper,
//   VerticalContentWrapper,
//   FullWrapper,
// } from '../../styles/Layout';
// import {CoverImage} from '../../styles/Images';

// const Style = StyleSheet.create({
//   logo: {
//     ...FullWrapper,
//     maxHeight: '100%',
//     resizeMode: 'contain',
//   },
//   fullWidthRow: {
//     ...HorizontalContentWrapper,
//     flex: 1,
//   },
//   throwImage: {
//     ...CoverImage,
//     ...FullWrapper,
//     aspectRatio: 2,
//   },
//   page: {
//     ...FullWrapper,
//   },
//   imageContainer: {
//     flex: 3,
//   },
//   mainContent: {
//     ...VerticalContentWrapper,
//     flex: 10,
//   },
//   description: {
//     ...LightText,
//     padding: 20,
//   },
//   body: {
//     ...FullWrapper,
//   },
// });

// export default Style;

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
    // aspectRatio: 2,
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
  overlayy: {
    backgroundColor: 'black',
    opacity: 0.5,
  },
});

export default Style;
