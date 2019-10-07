import React from 'react';
import {Scene, Router, Stack, Drawer} from 'react-native-router-flux';

import Trending from './screens/Trending';

import DrawerContent from './components/drawer/DrawerContent';

import Movie from './screens/Movie';
import Tv from './screens/Tv';

import DetailPage from './screens/DetailPage';

import YouTubeVideo from './components/YouTubeVideo';
import About from './screens/About';

const Scenes = () => (
  <Router>
    <Stack key="root">
      <Drawer
        hideNavBar
        key="drawer"
        contentComponent={DrawerContent}
        drawerWidth={300}>
        <Scene key="Main" hideNavBar>
          <Scene
            key="Trending"
            component={Trending}
            hideNavBar
            panHandlers={null}
            initial
          />
          <Scene key="Movie" component={Movie} hideNavBar panHandlers={null} />
          <Scene key="Tv" component={Tv} hideNavBar panHandlers={null} />

          <Scene
            key="DetailPage"
            component={DetailPage}
            hideNavBar
            panHandlers={null}
          />

          <Scene
            key="YouTubeVideo"
            component={YouTubeVideo}
            hideNavBar
            panHandlers={null}
          />

          <Scene key="About" component={About} hideNavBar panHandlers={null} />
        </Scene>
      </Drawer>
    </Stack>
  </Router>
);

export default Scenes;
