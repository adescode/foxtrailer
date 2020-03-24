import { Share, Platform, Linking, Alert } from 'react-native';
import { STORE_LINK, MARKET_LINK } from './config';
import Snackbar from 'react-native-snackbar';
import { trackShare } from './firebaseFunc';

export const onShare = async () => {
  try {
    await Share.share({
      message: `FoxTrailer, your movie trailer app. Download foxtrailer here ${MARKET_LINK}`,
      url: MARKET_LINK,
      title: 'FoxTrailer',
    });
    trackShare();
  } catch (error) {
    Snackbar.show({
      title: `${error.message}`,
      duration: Snackbar.LENGTH_LONG,
    });
  }
};

export const showAlert = (title, message, action) => {
  Alert.alert(
    title,
    message,
    [
      { text: 'Sure', onPress: () => action(MARKET_LINK) },
      {
        text: 'No Thanks!',
        onPress: () => {},
        style: 'cancel',
      },
    ],
    { cancelable: false },
  );
};

export const onLinkingUrl = url => {
  Linking.openURL(url).catch(err => {
    Snackbar.show({
      title: `${err.message}`,
      duration: Snackbar.LENGTH_LONG,
    });
  });
};

export const onRateUs = () => {
  const title = 'Rate us';
  const message =
    'Would you like to share your review with us? This will help and motivate us a lot.';
  if (Platform.OS !== 'ios') {
    //To open the Google Play Store
    showAlert(title, message, onLinkingUrl);
  } else {
    //To open the Apple App Store
    showAlert(title, message, onLinkingUrl);
  }
};
