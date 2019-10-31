// packages
import React, { Component } from 'react';
import { View, Text, StyleSheet, BackHandler, Alert } from 'react-native';
/**
 * Attaches an event listener that handles the android-only hardware
 * back button
 * @param  {Function} callback The function to call on click
 */
import { withNavigation } from 'react-navigation'

class HandleBack extends Component {
  constructor(props) {
    super(props)

    this.didFocus = props.navigation.addEventListener('didFocus',
    payload => {
      BackHandler.addEventListener('hardwareBackPress', this.onBack)
    })
  }

  componentDidMount() {
    this.willBlur = 
    this.props.navigation.addEventListener
    ('willBlur', payload => {
      BackHandler.removeEventListener
      ('hardwareBackPress', this.onBack)
    })
  }

  onBack = () => {
    return this.props.onBack();
  }

  componentWillUnmount() {
    this.didFocus.remove();
    this.willBlur.remove();
    BackHandler.removeEventListener
      ('hardwareBackPress', this.onBack)
  }

  render () {
    return this.props.children;
  }
}

// const handleAndroidBackButton = callback => {
//   BackHandler.addEventListener('hardwareBackPress', () => {
  
//     callback ? callback() : ()=>{};
//     return true;
//   });
// };

/**
* Removes the event listener in order not to add a new one
* every time the view component re-mounts
*/
// const removeAndroidBackButtonHandler = () => {
//   BackHandler.removeEventListener('hardwareBackPress', () => {});
// }

const exitAlert = () => {
  Alert.alert(
      'Confirm exit',
      'Do you want to quit the app?',
      [
        { text: 'Yes', onPress: () => 
        this.props.navigation.exitApp() },
        { text: 'No', onPress: () => {}, 
        style: 'cancel' }
      ],
      { cancelable: false },
    );
    return true;
};

export default withNavigation (
  HandleBack,
  exitAlert
);