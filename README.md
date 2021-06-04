# FoxTrailer

The easiest and fastest way to find and discover movies and tv shows on your device. You can view trending movie, download wallpapers, watch latest movie trailer.


![FoxTrailer-screenshots](https://firebasestorage.googleapis.com/v0/b/fox-trailer.appspot.com/o/FCMImages%2F83244731-fd5f-48aa-9b18-b87dbf5fb74e.jpg?alt=media&token=2e46c227-3a86-4202-b985-67c1725cbf0f)


### Download Foxtrailer

- [Download foxtrailer from play store - v1.0.9](https://play.google.com/store/apps/details?id=com.foxtrailer)

### What's included

|                                      Name                                      | Description                                          |
| :----------------------------------------------------------------------------: | ---------------------------------------------------- |
|    [React Native](http://facebook.github.io/react-native/releases/0.61.2/)     | Build Native Mobile Apps using JavaScript and React. |
| [React Native Router Flux](https://github.com/aksonov/react-native-router-flux) | define all the routes in one central place           |
|                          [Redux](https://nodejs.org/)                          | Predictable state container for JavaScript apps.     |
|             [Redux Thunk](https://github.com/gaearon/redux-thunk)              | Thunk middleware for Redux                           |
|                          [ESLint](http://eslint.org/)                          | The pluggable linting utility for JavaScript and JSX |
|                          [Firebase](https://firebase.google.com/docs/?authuser=0) | Google Analytics and Google Cloud Messaging       |
|                          [CodePush](https://github.com/microsoft/react-native-code-push) | Enables developers to deploy mobile app updates directly to their users' devices.      |

### Requirements

- [Node](https://nodejs.org/) >= v10.15.3
- [npm](https://npmjs.com) >= 6.8.0

### Installation

Clone this repo

```sh
$ git clone https://github.com/adescode/foxtrailer.git
$ cd foxtrailer
$ yarn install
```

Create `.env` file in your root directory and add the following

```sh
TMDB_URL=https://api.themoviedb.org/3
TMDB_IMG_URL=https://image.tmdb.org/t/p
TMDB_API_KEY=your_tmdb_api_key_here

YOUTUBE_URL=https://www.googleapis.com/youtube/v3/videos
YOUTUBE_API_KEY=your_youtube_api_key_here

```

Get api key -
[TMDB](https://www.themoviedb.org/) -
[Youtube](https://console.developers.google.com)

### How to start

```sh
$ react-native run-android
```

or

```sh
$ react-native run-ios
```

## Extra


React-native >= 0.60 now auto link modules, but some modules require
some manual additions for it to function properly, Modules like

### General
Default image might not work on android debug version, but it works on ios.

## TODO

- [x] Add splash screen and Icon to Android.
- [x] Add Image gallery.
- [x] Implement fast image loader(Implemented still not fast enough).
- [x] Add download button and function to image gallery.
- [x] Publish to Google playstore.
- [x] Implement Firebase Analytics.
- [x] Implement Firebase messaging(push notification).
- [x] Implement functional share button.
- [x] Implement deep linking.
- [x] Add code push.
- [x] Allow Android back button in some other screens.
- [x] Add splash screen and Icon to iOS.
- [x] Add Search feature(Movie and tv show).
- [x] Remove inline style.
- [x] Clean up the entire code.
- [x] Image download on ios not working.

## ISSUES
- Proguard app shrinking giving networking error after build. App size can still be less than 10mb if code is well minified.
- Higher increase in change of version code on play store.

## License

Copyright (c) 2019-present Adelaja Ibrahim. All rights reserved.

**The code, design and articles in this repository are intellectual property of
the person whose name is mentioned above (unless otherwise stated) and as such
CANNOT be copied, modified, sublicensed or redistributed without permission from
the author.**
