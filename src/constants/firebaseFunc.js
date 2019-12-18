import analytics from '@react-native-firebase/analytics';

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
    // content_type: 't-shirts',
    // item_id: '12345',
    // method: 'twitter.com',
    params,
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

export const trackUserId = async () => {
  // Gives a user a unique identification.
  await analytics().setUserId('123456789');
};
