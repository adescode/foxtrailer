import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, Platform, Linking, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import { fcmBackgroundMessageHandler } from '../../constants/firebaseFunc';

class WelcomeScreen extends Component {
  componentDidMount() {
    if (Platform.OS === 'android') {
      Linking.getInitialURL().then(url => {
        if (url !== null && url !== undefined && url !== '') {
          // console.log('logging url', url);
          this.navigate(url);
        } else {
          Actions.jump('Trending');
        }
      });
    } else {
      Linking.addEventListener('url', this.handleOpenURL);
    }
    fcmBackgroundMessageHandler();
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  handleOpenURL = event => {
    this.navigate(event.url);
  };

  navigate = url => {
    const route = url.replace(/.*?:\/\//g, '');
    const id = route.match(/\/([^\/]+)\/?$/)[1];
    const mediaType = route.split('/')[2];
    Actions.jump('DetailPage', {
      mediaType,
      data: { id, mediaType },
      from: 'Trending',
    });
  };

  render() {
    return (
      <Container style={{ justifyContent: 'center' }}>
        <View>
          <TouchableOpacity onPress={() => Actions.jump('Trending')}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                color: '#ffffff',
                textAlign: 'center',
              }}>
              RELOAD
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
