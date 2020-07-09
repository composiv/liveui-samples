/**
 * @format
 */

import {AppRegistry} from 'react-native';
import liveui from '@composiv/liveui-core';
import App from './App';
import {name as appName} from './app.json';

import config from './liveui.config.host';

liveui.initializeApp(config);

AppRegistry.registerComponent(appName, () => App);
