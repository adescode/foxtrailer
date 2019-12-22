/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
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
  List,
  ListItem,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { trackScreenView } from '../../constants/firebaseFunc';
import { onShare, onRateUs } from '../../constants/helpers';

class Settings extends Component {
  componentDidMount() {
    trackScreenView(Actions.currentScene);
  }

  _onFeedback = () => {
    Linking.openURL(
      'mailto:adelaja444@gmail.com?subject=Feedback&body=Hello Adescode,',
    );
  };

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
              More Info
            </Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <ListItem onPress={() => Actions.FAQ()}>
              <Left>
                <Text style={styles.colorWhite}>FAQ</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress={() => this._onFeedback()}>
              <Left>
                <Text style={styles.colorWhite}>Give us Feedback</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress={() => Actions.AboutDeveloper()}>
              <Left>
                <Text style={styles.colorWhite}>About the Developer</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress={() => Actions.AboutApp()}>
              <Left>
                <Text style={styles.colorWhite}>About the App</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress={() => onRateUs()}>
              <Left>
                <Text style={styles.colorWhite}>Rate us</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress={() => onShare()}>
              <Left>
                <Text style={styles.colorWhite}>Share</Text>
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
  colorWhite: { color: '#ffffff' },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
