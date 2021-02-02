import {withStore} from '../helpers/withStore';
import {Navigation} from 'react-native-navigation';
import {name as appName} from '../../app.json';
import Modal from '../components/Modal';
import Login from '../screens/Login';
import Home from '../screens/Home';
export const registerScreens = () => {
  Navigation.registerComponent('home', withStore(Home), () => Home);
  Navigation.registerComponent('modal', withStore(Modal), () => Modal);
  Navigation.registerComponent(appName, withStore(Login), () => Login);
};
