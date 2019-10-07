/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
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
import {Actions} from 'react-native-router-flux';

class About extends Component {
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
              About
            </Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <View style={{flex: 1}}>
              <Text
                style={{alignSelf: 'center', fontSize: 30, fontWeight: 'bold'}}>
                FOX TRAILER
              </Text>
              <View style={{padding: 10}}>
                <Text style={{fontSize: 16, letterSpacing: 0.4}}>
                  The title "FOX" from "FOX TRAILER" was pick after the username
                  of the project supervisor White Fox on Reactiflux, because
                  it's a Movie and Tv-Show trailer app, it was then named Fox
                  Trailer
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
)(About);
