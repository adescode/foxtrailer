import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {StyleProvider} from 'native-base';
import getTheme from './theme/native-base-theme/components';
import variables from './theme/native-base-theme/variables/variables';
import Scenes from './Scenes';

class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileUrl: null,
    };
  }

  render() {
    var uri = this.state.fileUrl;
    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={this.props.store}>
          <Scenes />
        </Provider>
      </StyleProvider>
    );
  }
}

export default Setup;
