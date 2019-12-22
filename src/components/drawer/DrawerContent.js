import React from 'react';
import { Text, View, TouchableOpacity, Linking } from 'react-native';
import { Content, Header, Left, Body, Right, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from './style';
import { trackScreenView } from '../../constants/firebaseFunc';
import { onShare, onRateUs } from '../../constants/helpers';

class DrawerContent extends React.Component {
  componentDidMount() {
    trackScreenView(Actions.currentScene);
  }

  goToMovies = query_type => {
    Actions.Movie({
      query_type,
    });
  };

  goToTv = query_type => {
    Actions.Tv({
      query_type,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header transparent>
          <Left />
          <Body>
            <Title>Fox Trailers</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={styles.drawerContainer}>
            <View style={styles.drawerListContainer}>
              <View>
                <Text style={[styles.drawerListTitle]}>Trending</Text>
              </View>
              <View style={{ paddingHorizontal: 10 }}>
                <View>
                  <TouchableOpacity onPress={() => Actions.Trending()}>
                    <Text style={styles.drawerListItem}>All</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={[styles.drawerListContainer]}>
              <View>
                <Text style={[styles.drawerListTitle]}>Movies</Text>
              </View>
              <View style={{ paddingHorizontal: 10 }}>
                <View>
                  <TouchableOpacity onPress={() => this.goToMovies('popular')}>
                    <Text style={styles.drawerListItem}>Popular</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => this.goToMovies('top_rated')}>
                    <Text style={styles.drawerListItem}>Top Rated</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity onPress={() => this.goToMovies('upcoming')}>
                    <Text style={styles.drawerListItem}>Upcoming</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => this.goToMovies('now_playing')}>
                    <Text style={styles.drawerListItem}>Now Playing</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={[styles.drawerListContainer]}>
              <View>
                <Text style={[styles.drawerListTitle]}>Tv Shows</Text>
              </View>
              <View style={{ paddingHorizontal: 10 }}>
                <View>
                  <TouchableOpacity onPress={() => this.goToTv('popular')}>
                    <Text style={styles.drawerListItem}>Popular</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity onPress={() => this.goToTv('top_rated')}>
                    <Text style={styles.drawerListItem}>Top Rated</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity onPress={() => this.goToTv('on_the_air')}>
                    <Text style={styles.drawerListItem}>On Tv</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity onPress={() => this.goToTv('airing_today')}>
                    <Text style={styles.drawerListItem}>Airing Today</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.drawerBreakline} />

            <View style={[styles.drawerListContainer]}>
              <View>
                <Text style={[styles.drawerListTitle, { marginTop: 10 }]}>
                  Info
                </Text>
              </View>
              <View style={{ paddingHorizontal: 10 }}>
                <View>
                  <TouchableOpacity onPress={() => onRateUs()}>
                    <Text style={styles.drawerListItem}>Rate us</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity onPress={() => onShare()}>
                    <Text style={styles.drawerListItem}>Share</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity onPress={() => Actions.Settings()}>
                    <Text style={styles.drawerListItem}>More...</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text style={styles.drawerListItem}>Version</Text>
                  </View>
                  <View>
                    <Text style={styles.drawerListItem}>1.0.1</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Content>
      </View>
    );
  }
}

export default DrawerContent;
