import Config from 'react-native-config';
import { Platform } from 'react-native';

/**
'react-native-config' was uninstalled because
 of issues on ios. Might be installed later(currently using .env back on android)
 *
 */

export const TMDB_URL = Config.TMDB_URL;
export const TMDB_IMG_URL = Config.TMDB_IMG_URL;
export const TMDB_API_KEY = Config.TMDB_API_KEY;

export const YOUTUBE_URL = Config.YOUTUBE_URL;
export const YOUTUBE_API_KEY = Config.YOUTUBE_API_KEY;

export const GOOGLE_PACKAGE_NAME = 'com.foxtrailer';
export const APPLE_STORE_ID = 'com.foxtrailer';
export const MARKET_LINK =
  Platform !== 'ios'
    ? `market://details?id=${GOOGLE_PACKAGE_NAME}`
    : `itms://itunes.apple.com/in/app/apple-store/${APPLE_STORE_ID}`;

export const STORE_LINK =
  'https://play.google.com/store/apps/details?id=com.foxtrailer';
