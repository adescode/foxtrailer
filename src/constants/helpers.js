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

export const onRateUs = () => {
  const title = 'Rate us';
  const message =
    'Would you like to share your review with us? This will help and motivate us a lot.';
  if (Platform.OS !== 'ios') {
    //To open the Google Play Store
    showAlert(
      title,
      message,
      Linking.openURL(STORE_LINK).catch(err => {
        console.log('Please check for the Google Play Store', err);
      }),
    );
  } else {
    //To open the Apple App Store
    showAlert(
      title,
      message,
      Linking.openURL(STORE_LINK).catch(err =>
        alert('Please check for the App Store'),
      ),
    );
  }
};
