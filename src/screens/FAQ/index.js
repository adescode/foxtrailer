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
  Through an intuitive interface the user can see the trailer, get information about movies, about their cast, and view photogalleries.
  
  foxtrailer is a pan-European (localized in 9 languages and for 10 EU countries) distributed application, available on SmartPhones, SmartTV and on the Web.`,
  },
  {
    title: 'Where can I find foxtrailer?',
    content: `foxtrailer is available on many mobile and Smart TV platforms.

    MOBILE: At the moment foxtrailer supports these mobile operating systems: Android, Windows Phone 7, Bada.
    To get the proper market's version you need to search for "foxtrailer" on your specific application market.
    
    SMART TV: foxtrailer is either preinstalled on your Smart TV set or available on the inbuilt application store.
    
    Connect to http://foxtrailer.tv for more details`,
  },
  {
    title: 'What do I need to run foxtrailer?',
    content: `foxtrailer is a cross platform application available for many mobile and smart tv operating system.
    To install/run foxtrailer you need a compatible system and a working Internet connection.
    foxtrailer is free but charges by carriers may occur when connecting on a mobile operator network.
    We suggest using a wifi connection.`,
  },
  {
    title: 'Which are the supported languages?',
    content: `foxtrailer is a pan-European application, localized in 9 languages and for 10 EU countries.
    Supported languages are:
    English (UK), German (DE), Italian (IT), Spanish (ES), French (FR), Danish (DK), Dutch (NL), Swedish (SE), Finnish (FI)
    `,
  },
  {
    title: 'Third Element',
    content: `To better support part of the highly acclaimed features, foxtrailer has to be granted the following permissions:
  - YOUR LOCATION
  - NETWORK COMMUNICATION
  - PHONE CALLS
  - STORAGE
  - SYSTEM TOOLS- HARDWARE CONTROLS
  - NETWORK COMMUNICATION
  - SYSTEM TOOLS
  YOUR LOCATION
  YOUR LOCATION
  COARSE (NETWORK-BASED) LOCATION
  Access coarse location sources such as the cellular network database to determine an approximate device location, where available.
  WHY?
  foxtrailer uses coarse location to help you find movies and theaters around you (at the moment this feature is available only for the italian market)
  
  NETWORK COMMUNICATION
  NETWORK COMMUNICATION
  FULL INTERNET ACCESS
  Allows an application to create network sockets.
  WHY?
  foxtrailer needs an Internet connection to retreive live listings and trailers.
  On the other hand, once you downloaded a trailer you can replay it off-line.
  
  PHONE CALLS
  PHONE CALLS
  READ PHONE STATE AND IDENTITY
  Allows the application to access the phone features of the device. An application with this permission can determine the phone number and serial number of this phone, whether a call is active, the number that call is connected to and the like.
  WHY?
  foxtrailer needs this permission to determine if the phone module is available on the device. Some tablets, for istance, are wi-fi only and part of foxtrailer's features would cause errors without this control. The phone feature is used to let users call movie theaters to book their tickets (if possible).
  
  STORAGE
  STORAGE
  MODIFY/DELETE USB STORAGE CONTENTS MODIFY/DELETE SD CARD CONTENTS
  Allows an application to write to the USB storage. Allows an application to write to the SD card.
  WHY?
  One of foxtrailer's native features is the ability do download trailers for later off-line play.
  To do so, foxtrailer needs to save cache files.
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
    Reboot your device
    Try playing videos at the lowest quality (medium); this can be done by changing the quality settings for both 3G and WiFi in the settings page (menu - settings) or holding the trailer item and selecting "medium" in the contextual menu that pops. If your device has a QVGA (240x320) or smaller display, medium video quality is the default setting and cannot be changed.
    Try to download a video and play it after the download is completed (a notification will be sent)`,
  },
  { title: 'Is it free?', content: 'Lorem ipsum dolor sit amet' },
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
                  installed) to support@foxtrailer.it
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
