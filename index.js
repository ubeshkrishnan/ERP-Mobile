/**
 * @format
 */

import {AppRegistry, Text, View} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const AppWithProvider = () => (
    
    <App />
    

);
AppRegistry.registerComponent(appName, () => AppWithProvider);
