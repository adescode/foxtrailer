/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { YellowBox } from 'react-native';
import { fcmBackgroundMessageHandler } from './src/constants/firebaseFunc';

console.disableYellowBox = true;
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps has been renamed',
  'Module RCTImageLoader requires',
]);

AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerHeadlessTask(
  'RNFirebaseBackgroundNotificationAction',
  () => fcmBackgroundMessageHandler,
);
