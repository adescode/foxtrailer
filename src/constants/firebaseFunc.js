import analytics from '@react-native-firebase/analytics';

export const trackScreenView = async screen => {
  // Set & override the MainActivity screen name
  await analytics().setCurrentScreen(screen, screen);
};
