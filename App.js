/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import createStore from './src/store/createStore';
import Setup from './src/Setup';
import {
  checkFcmPermission,
  androidActionCustomButton,
} from './src/constants/firebaseFunc';

const App = () => {
  checkFcmPermission();
  const initialState = window.___INTITIAL_STATE__;
  const store = createStore(initialState);
  return <Setup store={store} />;
};
export default App;
