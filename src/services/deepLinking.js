import { Platform, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';

const subscribeDeepLinking = () => {
  if (Platform.OS === 'android') {
    Linking.getInitialURL().then(url => {
      if (url !== null && url !== undefined && url !== '') {
        // console.log('logging url', url);
        navigate(url);
      } else {
        Linking.addEventListener('url', this.handleOpenURL);
      }
    });
  }
};

const handleOpenURL = event => {
  navigate(event.url);
};

const navigate = url => {
  const route = url.replace(/.*?:\/\//g, '');
  const id = route.match(/\/([^\/]+)\/?$/)[1];
  const mediaType = route.split('/')[2];
  Actions.jump('DetailPage', {
    mediaType,
    data: { id, mediaType },
    from: 'Trending',
  });
};

const unsubscribeDeepLinking = () =>
  Linking.removeEventListener('url', handleOpenURL);

export { subscribeDeepLinking, unsubscribeDeepLinking };
