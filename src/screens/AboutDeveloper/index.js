/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
  Thumbnail,
  H1,
  List,
  ListItem,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { trackScreenView } from '../../constants/firebaseFunc';
import { onLinkingUrl } from '../../constants/helpers';
import { TWITTER, GITHUB, LINKEDIN, PORTFOLIO } from '../../constants/config';

class AboutDeveloper extends Component {
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
              About Developer
            </Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card transparent>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <View>
                <Thumbnail
                  large
                  circular
                  source={require('../../assets/aia.jpeg')}
                />
              </View>
              <View style={{ padding: 10, marginVertical: 20 }}>
                <Text style={styles.aboutText}>
                  I am <H1 style={styles.aiaText}>Adelaja Ibrahim(Adescode)</H1>
                  . I'm a proficient Javascript Developer, majorly using React
                  and React-Native on Front-End Application and Mobile
                  Application. I also have integrated a lot of APIs for
                  different applications, including by not limited to Google
                  map, geolocation, push notification, email service, VoIP
                  service, online payment and real time chat. Currently
                  developed more of react-native apps like banking app, ride
                  sharing app, movie app and delivery App.
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  letterSpacing: 0.4,
                  color: '#ffffff',
                  fontWeight: 'bold',
                  marginLeft: 10,
                  alignSelf: 'flex-start',
                }}>
                Follow Me:
              </Text>
            </View>
          </Card>
          <List style={{ marginBottom: 20 }}>
            <ListItem onPress={() => onLinkingUrl(TWITTER)}>
              <Left>
                <Text style={styles.colorWhite}>Twitter</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress={() => onLinkingUrl(GITHUB)}>
              <Left>
                <Text style={styles.colorWhite}>Github</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress={() => onLinkingUrl(LINKEDIN)}>
              <Left>
                <Text style={styles.colorWhite}>LinkedIn</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress={() => onLinkingUrl(PORTFOLIO)}>
              <Left>
                <Text style={styles.colorWhite}>Portfolio</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  aboutText: {
    fontSize: 16,
    letterSpacing: 0.1,
    color: '#ffffff',
    fontWeight: '500',
  },
  aiaText: {
    fontSize: 20,
    letterSpacing: 0.4,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  colorWhite: {
    color: '#ffffff',
  },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AboutDeveloper);
