/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MainPage from './Screen/MainScreen';
import PlayMusic from './Screen/PlayMusic';
import tabscreen from './Screen/TabScreen';
import db from './Setup';
import Setup from './Setup';
import TrackPlayer from 'react-native-track-player';
import PlayerScreen from './Screen/MusicPlayer';
import signUp from './Screen/Signup';

console.disableYellowBox = true

AppRegistry.registerComponent(appName, () => App)  ;

TrackPlayer.registerPlaybackService(() => require('./Screen/Service'));
