import React from 'react';
import { Scene, Router, Stack, Drawer } from 'react-native-router-flux';

import Trending from './screens/Trending';

import DrawerContent from './components/drawer/DrawerContent';

import Movie from './screens/Movie';
import Tv from './screens/Tv';

import DetailPage from './screens/DetailPage';

import YouTubeVideo from './components/YouTubeVideo';
import WelcomeScreen from './screens/WelcomeScreen';
import GalleryComponent from './components/Gallery';
import FAQ from './screens/FAQ';
import Settings from './screens/Settings';
import AboutDeveloper from './screens/AboutDeveloper';
import AboutApp from './screens/AboutApp';

const Scenes = () => (
  <Router>
    <Stack key="root">
      <Scene key="WelcomeScreen" component={WelcomeScreen} hideNavBar />
      <Drawer
        hideNavBar
        key="drawer"
        contentComponent={DrawerContent}
        drawerWidth={300}>
        <Scene key="Main" hideNavBar>
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

          <Scene key="Settings" component={Settings} hideNavBar />

          <Scene key="FAQ" component={FAQ} hideNavBar />

          <Scene key="AboutDeveloper" component={AboutDeveloper} hideNavBar />
          <Scene key="AboutApp" component={AboutApp} hideNavBar />
        </Scene>
      </Drawer>
    </Stack>
  </Router>
);

export default Scenes;
