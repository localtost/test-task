import {baseStack} from './app/navigation/navigation';
import {Navigation} from 'react-native-navigation';
Navigation.events().registerAppLaunchedListener(async () => baseStack());
