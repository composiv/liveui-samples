/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import liveui from '@eclipse-muto/liveui-core';
import config from './liveui.config';
liveui.initializeApp(config);


AppRegistry.registerComponent(appName, () => App);
