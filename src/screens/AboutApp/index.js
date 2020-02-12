/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
  H1,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { trackScreenView } from '../../constants/firebaseFunc';
import { onLinkingUrl } from '../../constants/helpers';
import Colors from '../../constants/Colors';

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
          <Card transparent>
            <View style={{ flex: 1 }}>
              <View>
                <Text
                  style={{
                    alignSelf: 'center',
                    color: '#ffffff',
                    fontSize: 30,
                  }}>
                  Hi there,
                </Text>
              </View>
              <View style={{ padding: 10 }}>
                <Text style={styles.aboutText}>
                  Foxtrailer is your movie trailer application. The easiest and
                  fastest way to find and discover movies and tv shows on your
                  device also get updates on your favorites movie or tv show.
                </Text>
              </View>

              <View style={{ padding: 10, marginTop: 5 }}>
                <Text style={styles.aboutText}>
                  Foxtrailer uses Api services from{' '}
                  <Text
                    style={[styles.aiaText]}
                    onPress={() => onLinkingUrl('https://www.themoviedb.org/')}>
                    TMDb(The movie database)
                  </Text>
                  . TMDb offers a powerful API service that is free to use as
                  long as you properly attribute them as the source of the data
                  and/or images you use. You will find a current list of the
                  available methods on movie, tv, actor and image API to
                  consume.
                </Text>
              </View>

              <View style={{ padding: 10 }}>
                <Text style={styles.aboutText}>
                  Foxtrailer, is an open source project, that means you can go
                  to{' '}
                  <Text
                    style={[styles.aiaText]}
                    onPress={() =>
                      onLinkingUrl('https://github.com/adescode/foxtrailer')
                    }>
                    my Github repository
                  </Text>{' '}
                  and clone it. Anyone can clone and also add to the project.
                  Cloned project can only be use for development purpose only.
                </Text>
              </View>
            </View>
          </Card>
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
    fontSize: 16,
    letterSpacing: 0.4,
    borderWidth: 1,
    fontWeight: 'bold',
    color: Colors.light,
    borderBottomColor: Colors.light,
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
)(AboutApp);
