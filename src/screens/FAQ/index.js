/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Card,
  Accordion,
  CardItem,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { trackScreenView } from '../../constants/firebaseFunc';
import Colors from '../../constants/Colors';

const dataArray = [
  {
    title: 'What is foxtrailer?',
    content: `foxtrailer is a service that provides information about latest movies in cinemas and home video format.
  Through an intuitive interface the user can see the trailer, get information about movies, view photo galleries and also download.`,
  },
  {
    title: 'Where can I find foxtrailer?',
    content: `foxtrailer is currently available on android.

    MOBILE: At the moment foxtrailer supports these mobile operating systems: Android, Windows Phone 7, Bada.
    To get the proper market's version you need to search for "foxtrailer" on google play store.`,
    // Connect to http://foxtrailer.tv for more details
  },
  {
    title: 'What do I need to run foxtrailer?',
    content: `foxtrailer is a cross platform application but currently available only for android devices.
    To install/run foxtrailer you need a compatible system and a working Internet connection.
    foxtrailer is free but charges by carriers may occur when connecting on a mobile operator network.
    We suggest using a wifi connection.`,
  },
  {
    title: 'Which are the supported languages?',
    content: 'foxtrailer currently supports only English (UK)',
  },
  {
    title: 'Can you explain what the "permissions required" are ?',
    content: `To better support part of the highly acclaimed features, foxtrailer has to be granted the following permissions:
  - YOUR LOCATION
  - NETWORK COMMUNICATION
  - STORAGE
  - SYSTEM TOOLS- HARDWARE CONTROLS
  - NETWORK COMMUNICATION
  - SYSTEM TOOLS
  
  NETWORK COMMUNICATION
  FULL INTERNET ACCESS
  Allows an application to create network sockets.
  WHY?
  foxtrailer needs an Internet connection to retreive live listings and trailers.

  STORAGE
  MODIFY/DELETE USB STORAGE CONTENTS MODIFY/DELETE SD CARD CONTENTS
  Allows an application to write to the USB storage. Allows an application to write to the SD card.
  WHY?
  One of foxtrailer's native features is the ability do download movie images

  This cache may be later cleared from inside the application, that's why foxtrailer needs the deletion permission.
  
  CONTROL VIBRATOR (HARDWARE CONTROLS)
  HARDWARE CONTROLS
  CONTROL VIBRATOR
  Allows the application to control the vibrator.
  WHY?
  This control let foxtrailer use the vibrator for haptic feedback.
  
  VIEW NETWORK STATE (NETWORK COMMUNICATION)
  NETWORK COMMUNICATION
  VIEW NETWORK STATE
  Allows an application to view the state of all networks.
  WHY?
  foxtrailer needs an Internet connection to load content listings and trailers. The "view network state" is used to intercept network errors and, should the need arise, notify users about missing connections.
  `,
  },
  {
    title: 'What are Notifications?',
    content: `With Notification you can be alerted when new movies are out in theaters or new videos are available.
  It's an easy and entertaining way to be kept update on movie releases.
  All notifications are sent via Google C2DM (Cloud to Device Messaging) push notification system.
  The notification feature only works on devices running Android 2.2 or higher that also have the Market application installed and at least one logged in Google account.`,
  },
  {
    title: 'Can I register to foxtrailer?',
    content:
      'At the moment there is no profiling option. In the future we plan to have a cross-registration system between devices. Keep following us!',
  },
  {
    title: 'Is it free?',
    content:
      'foxtrailer is a completely free service, nonetheless it requires an Internet connection. We suggest using a wifi connection.',
  },
  {
    title: 'I cannot play videos, what can I do?',
    content: `Possible solutions are:
    Check your internet connection
    Update foxtrailer to the latest release
    Reboot your device`,
  },
];

class FAQ extends Component {
  componentDidMount() {
    trackScreenView(Actions.currentScene);
  }

  render() {
    return (
      <Container>
        <Header transparent>
          <Left>
            <Button onPress={() => Actions.pop()} transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title
              style={{
                fontWeight: 'bold',
                textTransform: 'capitalize',
              }}>
              FAQ
            </Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Accordion
            dataArray={dataArray}
            // headerStyle={{ backgroundColor: Colors.primary }}
            contentStyle={{ backgroundColor: Colors.lighter }}
          />
          <Card style={{ marginTop: 30 }}>
            <CardItem>
              <View>
                <Text>
                  If none of these worked for you, please send as many
                  information as you can about your device configuration
                  (country, carrier, model, os version, other media apps
                  installed) to adelaja444@gmail.com
                </Text>
              </View>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FAQ);
