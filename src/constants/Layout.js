import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default {
  width,
  height,
  isSmallDevice: width < 375,
};
