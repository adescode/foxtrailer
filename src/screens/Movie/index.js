/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { RefreshControl } from 'react-native';
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
import { connect } from 'react-redux';
import SeeAllPage from '../../components/seeAllPage';
import { fetch_Listing } from '../../reducers/home';
import { Actions } from 'react-native-router-flux';
import {
  handleAndroidBackButton,
  removeAndroidBackButtonHandler,
} from '../../services/androidBackButton';
import { trackScreenView } from '../../constants/firebaseFunc';

export class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: true,
      title: 'Movies',
    };
  }

  componentDidMount() {
    const { query_type } = this.props;

    this.fetch_Listing();
    handleAndroidBackButton(this._backButton);
    trackScreenView(`${Actions.currentScene} ${query_type}`);
  }

  componentWillUnmount() {
    removeAndroidBackButtonHandler();
  }

  _backButton = () => {
    removeAndroidBackButtonHandler();
    return true;
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.title !== this.props.title) {
      const { fetch_Listing, media_type, query_type, page } = this.props;
      this.setState({ refreshing: true }, () => {
        fetch_Listing(media_type, query_type, page);
      });
    }

    if (prevProps.listing !== this.props.listing) {
      const { listing } = this.props;

      this.setState({
        listingData: listing.results,
        refreshing: false,
      });
    }
  }

  fetch_Listing = () => {
    const { fetch_Listing, query_type } = this.props;
    const param = {
      media_type: 'movie',
      query_type: query_type ? query_type : 'now_playing',
      page: 1,
    };
    fetch_Listing(param);
  };

  _onRefresh = () => {
    this.fetch_Listing();
  };

  render() {
    const { showSeeAllPage, refreshing, listingData } = this.state;
    return (
      <Container>
        <Header transparent>
          <Left>
            {(!showSeeAllPage && (
              <Button transparent onPress={() => Actions.drawerOpen()}>
                <Icon name="menu" />
              </Button>
            )) || (
              <Button
                onPress={() => {
                  this.setState({
                    showSeeAllPage: false,
                    title: 'Movies',
                  });
                }}
                transparent>
                <Icon name="arrow-back" />
              </Button>
            )}
          </Left>
          <Body>
            <Title
              style={{
                fontWeight: 'bold',
                textTransform: 'capitalize',
              }}>
              {'Movies'}
            </Title>
          </Body>
          <Right />
        </Header>
        <Content
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this._onRefresh}
            />
          }>
          <SeeAllPage mediaData={listingData} mediaType={'movie'} />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  listing: state.home.listing,
});

const mapDispatchToProps = { fetch_Listing };

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
