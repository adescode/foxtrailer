import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  PermissionsAndroid,
  Alert,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';
import FastImage from 'react-native-fast-image';
import RNFetchBlob from 'rn-fetch-blob';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Right,
} from 'native-base';
import Colors from '../../constants/Colors';
import Snackbar from 'react-native-snackbar';
import Loader from '../Loader';
import { trackScreenView } from '../../constants/firebaseFunc';

const { height, width } = Dimensions.get('window');

export async function request_storage_runtime_permission(uri, stopLoader) {
  try {
    if (Platform.OS === 'ios') {
      downloadImage(uri, stopLoader);
    } else {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Snackbar.show({
          title: 'Downloading....',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: Colors.primary,
          color: Colors.sec_dark,
        });
        downloadImage(uri, stopLoader);
      } else {
        Snackbar.show({
          title: 'Storage Permission Not Granted',
          duration: Snackbar.LENGTH_LONG,
        });
      }
    }
  } catch (err) {
    console.warn(err);
  }
}
export const downloadImage = (uri, stopLoader) => {
  var date = new Date();
  var ext = getExtention(uri);
  ext = '.' + ext[0];
  const { config, fs } = RNFetchBlob;
  let PictureDir = fs.dirs.PictureDir;
  let options = {
    fileCache: true,
    addAndroidDownloads: {
      useDownloadManager: true,
      notification: true,
      path:
        PictureDir +
        '/image_' +
        Math.floor(date.getTime() + date.getSeconds() / 2) +
        ext,
      description: 'Image',
    },
  };
  config(options)
    .fetch('GET', uri)
    .then(res => {
      stopLoader();
    });
};

const getExtention = filename => {
  return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
};
export class GalleryComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      downloadUri: '',
      isLoading: false,
    };
  }

  handleDownload = () => {
    const { index } = this.state;
    const { images, imageType } = this.props;
    const { posters, backdrops } = images;
    const galleryType = imageType === 'posters' ? posters : backdrops;
    let file_path = galleryType[index].file_path;
    let uri = `https://image.tmdb.org/t/p/original${file_path}`;
    this.setState({ isLoading: true }, async () => {
      await request_storage_runtime_permission(uri, this.stopLoader);
    });
  };

  stopLoader = () => {
    this.setState({ isLoading: false });
  };

  componentDidMount() {
    trackScreenView(Actions.currentScene);
  }

  render() {
    // console.log('Platform', Platform);
    const { isLoading } = this.state;
    const { images, imageType } = this.props;
    const { posters, backdrops } = images;
    const galleryType = imageType === 'posters' ? posters : backdrops;
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
          <Right>
            <Button onPress={this.handleDownload} transparent>
              <Icon name="download" />
            </Button>
          </Right>
        </Header>
        <Loader loading={isLoading} />
        <Swiper
          style={styles.wrapper}
          showsButtons={true}
          bounces={true}
          loop={false}
          onIndexChanged={index => this.setState({ index })}
          nextButton={
            <Icon
              type="MaterialIcons"
              name="arrow-forward"
              style={styles.buttonText}
            />
          }
          prevButton={
            <Icon
              type="MaterialIcons"
              name="arrow-back"
              style={styles.buttonText}
            />
          }>
          {galleryType &&
            galleryType.map((value, index) => (
              <View key={index} style={styles.slide1}>
                <FastImage
                  source={{
                    uri: `https://image.tmdb.org/t/p/original${value.file_path}`,
                    priority: FastImage.priority.high,
                  }}
                  defaultSource={require('../../assets/movie_default.jpg')}
                  style={[
                    imageType === 'posters'
                      ? { width, height: height - 100 }
                      : { width, height: height / 3.5 },
                  ]}
                  onLoadStart={() => this.setState({ isLoading: true })}
                  onLoadEnd={() => this.setState({ isLoading: false })}
                  onError={() => this.setState({ isLoading: false })}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
            ))}
        </Swiper>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000608',
  },
  buttonText: {
    color: '#ffffff',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(GalleryComponent);
