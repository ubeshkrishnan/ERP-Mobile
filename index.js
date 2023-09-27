/**
 * @format
 */

import {AppRegistry, Text, View} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { PaperProvider } from 'react-native-paper';
const AppWithProvider = () => (
    <PaperProvider>
      <App />
    </PaperProvider>

);
AppRegistry.registerComponent(appName, () => AppWithProvider);
