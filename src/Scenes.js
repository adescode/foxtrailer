import React from 'react';
import {Scene, Router, Stack, Drawer} from 'react-native-router-flux';

import Trending from './screens/Trending';

import DrawerContent from './components/drawer/DrawerContent';

import Movie from './screens/Movie';
import Tv from './screens/Tv';

import DetailPage from './screens/DetailPage';

import YouTubeVideo from './components/YouTubeVideo';
import About from './screens/About';
import WelcomeScreen from './screens/WelcomeScreen';
import GalleryComponent from './components/Gallery';

const Scenes = () => (
  <Router>
    <Stack key="root">
      <Drawer
        hideNavBar
        key="drawer"
        contentComponent={DrawerContent}
        drawerWidth={300}>
        <Scene key="Main" hideNavBar>
          <Scene key="WelcomeScreen" component={WelcomeScreen} hideNavBar />

          <Scene key="Trending" component={Trending} hideNavBar initial />

          <Scene key="Movie" component={Movie} hideNavBar />

          <Scene key="Tv" component={Tv} hideNavBar />

          <Scene key="DetailPage" component={DetailPage} hideNavBar />

          <Scene key="YouTubeVideo" component={YouTubeVideo} hideNavBar />

          <Scene
            key="GalleryComponent"
            component={GalleryComponent}
            hideNavBar
          />

          <Scene key="About" component={About} hideNavBar />
        </Scene>
      </Drawer>
    </Stack>
  </Router>
);

export default Scenes;
