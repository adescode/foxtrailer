import React from 'react';
import {StyleSheet, ScrollView, PixelRatio} from 'react-native';
import YouTube from 'react-native-youtube';
import {Container, Header, Left, Button, Icon, Body, Right} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Colors from '../../constants/Colors';
import {
  handleAndroidBackButton,
  removeAndroidBackButtonHandler,
} from '../../services/androidBackButton';

export default class YouTubeVideo extends React.Component {
  state = {
    isReady: false,
    status: null,
    quality: null,
    error: null,
    isPlaying: true,
    isLooping: false,
    duration: 0,
    currentTime: 0,
    fullscreen: false,
    containerMounted: false,
    containerWidth: null,
  };

  componentDidMount() {
    handleAndroidBackButton(this._backButton);
  }

  componentWillUnmount() {
    removeAndroidBackButtonHandler();
  }

  _backButton = () => {
    Actions.pop();
  };

  render() {
    const {newLink} = this.props;
    const {
      containerMounted,
      containerWidth,
      isPlaying,
      isLooping,
      fullscreen,
    } = this.state;

    return (
      <Container>
        <Header
          transparent
          style={{
            backgroundColor: Colors.sec_darker,
          }}
          androidStatusBarColor="transparent">
          <Left>
            <Button onPress={() => Actions.pop()} transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body />
          <Right />
        </Header>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.scrollView}
          onLayout={({
            nativeEvent: {
              layout: {width},
            },
          }) => {
            if (!containerMounted) {
              this.setState({
                containerMounted: true,
              });
            }
            if (containerWidth !== width) {
              this.setState({
                containerWidth: width,
              });
            }
          }}>
          {this.state.containerMounted && (
            <YouTube
              ref={component => {
                this._youTubeRef = component;
              }}
              // You must have an API Key for the player to load in Android
              apiKey="AIzaSyAOOCq7g4EKYeW2XWt95wcyUzlB32eJ2Lg"
              // Un-comment one of videoId / videoIds / playlist.
              // You can also edit these props while Hot-Loading in development mode to see how
              // it affects the loaded native module
              videoId={`${newLink}`}
              // videoIds={['HcXNPI-IPPM', 'XXlZfc1TrD0', 'czcjU1w-c6k', 'uMK0prafzw0']}
              // playlistId="PLF797E961509B4EB5"
              play={isPlaying}
              loop={isLooping}
              fullscreen={fullscreen}
              controls={2}
              modestbranding={false}
              showFullscreenButton={true}
              style={[
                {
                  height: PixelRatio.roundToNearestPixel(
                    this.state.containerWidth / (16 / 9),
                  ),
                },
                styles.player,
              ]}
              onError={e => this.setState({error: e.error})}
              onReady={e => this.setState({isReady: true})}
              onChangeState={e => this.setState({status: e.state})}
              onChangeQuality={e =>
                this.setState({
                  quality: e.quality,
                })
              }
              onChangeFullscreen={e =>
                this.setState({
                  fullscreen: e.isFullscreen,
                })
              }
              onProgress={e =>
                this.setState({
                  duration: e.duration,
                  currentTime: e.currentTime,
                })
              }
            />
          )}
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.sec_darker,
  },
  scrollView: {
    flex: 1,
    justifyContent: 'center',
  },
  player: {
    alignSelf: 'stretch',
    marginVertical: 10,
  },
});
