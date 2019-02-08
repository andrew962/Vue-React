import { AppRegistry } from 'react-native';
import App from './App';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Setting a timer']);

AppRegistry.registerComponent('smarth', () => App);
