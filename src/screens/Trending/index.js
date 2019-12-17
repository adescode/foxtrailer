/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
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
} from 'native-base';
import {connect} from 'react-redux';

import {fetch_trending} from '../../reducers/home';
import SeeAllPage from '../../components/seeAllPage';
import {Actions} from 'react-native-router-flux';
import Colors from '../../constants/Colors';
import {
  handleAndroidBackButton,
  exitAlert,
  removeAndroidBackButtonHandler,
} from '../../services/androidBackButton';

export class Trending extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: true,
      title: 'Trending',
      showSeeAllPage: false,
    };
  }

  componentDidMount() {
    const {fetch_trending} = this.props;
    fetch_trending();
    handleAndroidBackButton(this._backButton);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.trending !== this.props.trending) {
      const {movie, tv, person} = this.props.trending;
      this.setState(
        {
          movieData: movie,
          tvData: tv,
          personData: person,
        },
        () => {
          this.setState({loaded: true, refreshing: false});
        },
      );
    }
  }

  componentWillUnmount() {
    removeAndroidBackButtonHandler();
  }

  _backButton = () => {
    const {showSeeAllPage} = this.state;
    if (showSeeAllPage) {
      this.setState({
        showSeeAllPage: false,
        title: 'Trending',
      });
    } else {
      exitAlert();
    }
  };

  _onRefresh = () => {
    const {fetch_trending} = this.props;
    this.setState({refreshing: true}, () => {
      fetch_trending();
    });
  };

  openSeeAll = (title, mediaData, mediaType) => {
    this.setState({
      title,
      showSeeAllPage: true,
      mediaData,
      mediaType,
    });
  };

  trendList = (title = 'TOP MOVIES', trend, mediaType) => {
    const sliceTrend = trend ? trend.slice(0, 5) : null;
    return (
      <>
        {(sliceTrend && sliceTrend.length) > 0 &&
          this.mediaTitle(title, trend, mediaType)}
        <FlatList
          data={sliceTrend}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return this.imageCard(item, mediaType);
          }}
        />
      </>
    );
  };

  mediaTitle = (title, mediaData, mediaType) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: Colors.sec_lighter,
          padding: 5,
        }}>
        <View style={{paddingHorizontal: 10}}>
          <Text style={{color: '#ffffff'}}>{title}</Text>
        </View>
        <TouchableOpacity
          onPress={() => this.openSeeAll(title, mediaData, mediaType)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{paddingHorizontal: 1}}>
            <Text style={{color: Colors.primary}}>SEE ALL</Text>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Icon
              name="ios-arrow-forward"
              style={{color: Colors.primary, fontSize: 20}}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  imageCard = (data, mediaType) => {
    const {poster_path, title, id, name, profile_path} = data;
    const newTitle = title ? title : name;
    const uri = poster_path ? poster_path : profile_path;

    return (
      <TouchableOpacity
        key={`${id}`}
        style={{
          flex: 1,
          borderColor: 'transparent',
          borderWidth: 1,
        }}
        onPress={() =>
          Actions.DetailPage({
            data,
            from: Actions.currentScene,
            mediaType,
          })
        }
        useForeground={true}>
        <View>
          <View>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/original${uri}`,
                cache: 'force-cache',
              }}
              defaultSource={require('../../assets/movie_default.jpg')}
              style={{width: 220, height: 350}}
            />
          </View>
          <View
            style={{
              width: 220,
              position: 'absolute',
              bottom: 0,
              left: 0,
              padding: 10,
              backgroundColor: '#00060880',
            }}>
            <Text style={{color: '#FFFFFF'}}>{newTitle}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  trendPage = () => {
    const {movieData, tvData} = this.state;
    return (
      <>
        {this.trendList('Top Movies', movieData, 'movie')}
        {this.trendList('Top Tv-Shows', tvData, 'tv')}
      </>
    );
  };

  render() {
    const {loaded, title, showSeeAllPage, mediaData, mediaType} = this.state;
    return (
      <Container>
        <Header transparent>
          <Left>
            {(!showSeeAllPage && (
              <Button transparent onPress={() => Actions.drawerOpen()}>
                <Icon name="menu" />
              </Button>
            )) || (
              <Button onPress={() => this._backButton()} transparent>
                <Icon name="arrow-back" />
              </Button>
            )}
          </Left>
          <Body>
            <Title style={{fontWeight: 'bold'}}>{title}</Title>
          </Body>
          <Right />
        </Header>
        <Content
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }>
          {(!showSeeAllPage && <>{this.trendPage()}</>) || (
            <SeeAllPage mediaData={mediaData} mediaType={mediaType} />
          )}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  trending: state.home.trending,
});

const mapDispatchToProps = {fetch_trending};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Trending);
