import { Share, Platform, Linking, Alert } from 'react-native';
import { STORE_LINK } from './config';

export const onShare = async () => {
  try {
    await Share.share({
      message: `FoxTrailer, your movie trailer app. Download foxtrailer here ${STORE_LINK}`,
      url: STORE_LINK,
      title: 'FoxTrailer',
    });
  } catch (error) {
    alert(error.message);
  }
};

export const showAlert = (title, message, action) => {
  Alert.alert(
    title,
    message,
    [
      { text: 'Sure', onPress: () => action },
      {
        text: 'No Thanks!',
        onPress: () => console.log('No Thanks Pressed'),
        style: 'cancel',
      },
    ],
    { cancelable: false },
  );
};

export const onLinkingUrl = url => {
  Linking.openURL(url).catch(err => {
    alert('Link not available');
  });
};

export const onRateUs = () => {
  const title = 'Rate us';
  const message =
    'Would you like to share your review with us? This will help and motivate us a lot.';
  if (Platform.OS !== 'ios') {
    //To open the Google Play Store
    showAlert(title, message, onLinkingUrl(STORE_LINK));
  } else {
    //To open the Apple App Store
    showAlert(title, message, onLinkingUrl(STORE_LINK));
  }
};
