import React from 'react';
import { Provider } from 'react-redux';
import { StyleProvider } from 'native-base';
import getTheme from './theme/native-base-theme/components';
import variables from './theme/native-base-theme/variables/variables';
import Scenes from './Scenes';

const Setup = ({ store }) => {
  return (
    <StyleProvider style={getTheme(variables)}>
      <Provider store={store}>
        <Scenes />
      </Provider>
    </StyleProvider>
  );
};

export default Setup;
