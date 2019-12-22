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
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { trackScreenView } from '../../constants/firebaseFunc';

class AboutApp extends Component {
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
              About App
            </Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 30,
                  fontWeight: 'bold',
                }}>
                About App
              </Text>
              <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 16, letterSpacing: 0.4 }}>
                  I am Adelaja Ibrahim. I am proficient in using, React,
                  React-Native, NodeJS, GraphQL MongoDB, Firebase, Zeplin, Adobe
                  XD, jQuery, and GIT. I also have integrated a lot of APIs for
                  different applications, including by not limited to Google
                  map, geolocation, push notification, email service, VoIP
                  service, online payment and real time chat. Currently
                  developed more of react-native apps like bank app, ride
                  sharing app, movie app and delivery App.
                </Text>
              </View>
            </View>
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
)(AboutApp);
