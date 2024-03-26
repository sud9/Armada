/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import App from './App';
import {Provider} from 'react-redux';
import store from './store/slice/index';
import {name as appName} from './app.json';
const AppRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
AppRegistry.registerComponent(appName, () => AppRedux);
