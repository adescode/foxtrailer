/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import codePush from 'react-native-code-push';
import createStore from './src/store/createStore';
import Setup from './src/Setup';
import { checkFcmPermission } from './src/constants/firebaseFunc';

class App extends Component {
  componentDidMount() {
    checkFcmPermission();
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  }

  render() {
    const initialState = window.___INTITIAL_STATE__;
    const store = createStore(initialState);
    return <Setup store={store} />;
  }
}

let codePushOption = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
  installMode: codePush.InstallMode.IMMEDIATE,
};

export default App = codePush(codePushOption)(App);
