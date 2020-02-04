import { firebase } from '@react-native-firebase/app';
import analytics from '@react-native-firebase/analytics';
import messaging from '@react-native-firebase/messaging';
import Snackbar from 'react-native-snackbar';
import { AsyncStorage } from 'react-native';

/**
 *  Beginning of analytics tracking
 */

export const trackScreenView = async screen => {
  // Set & override the MainActivity screen name
  await analytics().setCurrentScreen(screen, screen);
};

export const trackLogin = async link => {
  // Login event. Apps with a login feature can report this event to signify that a user has logged in.
  await analytics().logLogin({
    method: link,
  });
};

export const trackShare = async params => {
  // Share event. Apps with social features can log the Share event to identify the most viral content.
  await analytics().logShare({
    ...params,
  });
};

export const trackUserProperties = async params => {
  // Sets multiple key/value pairs of data on the current user
  await analytics().setUserProperties({ params });
};

export const trackAppOpen = async () => {
  //  By logging this event when an App is moved to the foreground,
  // developers can understand how often users leave and return during the course of a Session.
  await analytics().logAppOpen();
};

export const trackUserId = async param => {
  // Gives a user a unique identification.
  await analytics().setUserId(param);
};

//End of tracking analytics

/**
 * Beginning of Firebase messaging
 */

export const checkFcmPermission = async () => {
  const isAutoInitEnabled = messaging().isAutoInitEnabled;
  console.log('isAutoInitEnabled', isAutoInitEnabled);
  messaging()
    .hasPermission()
    .then(enabled => {
      if (enabled) {
        // user has permissions
        getFcmToken();
      } else {
        // user doesn't have permission
        requestFcmPermission();
      }
    });
};

export const requestFcmPermission = () => {
  messaging()
    .requestPermission()
    .then(() => {
      getFcmToken();
      // User has authorized
    })
    .catch(error => {
      console.log('error', error);
      Snackbar.show({
        title: 'Notification permissions rejected',
        duration: Snackbar.LENGTH_LONG,
      });
      // User has rejected permissions
    });
};

export const getFcmToken = async () => {
  const fcmToken = await messaging().getToken();

  if (fcmToken) {
    console.log('User FCM Token:', fcmToken);
  } else {
    console.log('User FCM Token: NONE');
  }
};

export const fcmBackgroundMessageHandler = async () => {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('FCM Message Data:', remoteMessage.data);
    // Update a users messages list using AsyncStorage
    const currentMessages = await AsyncStorage.getItem('messages');
    const messageArray = JSON.parse(currentMessages);
    console.log('messageArray', messageArray);

    messageArray.push(remoteMessage.data);
    await AsyncStorage.setItem('messages', JSON.stringify(messageArray));
  });
};
