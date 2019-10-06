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

const App = () => {
  const initialState = window.___INTITIAL_STATE__;
  const store = createStore(initialState);
  return <Setup store={store} />;
};
export default App;
