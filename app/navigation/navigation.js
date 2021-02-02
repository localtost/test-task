import {name as appName} from '../../app.json';
import {Navigation} from 'react-native-navigation';
import {registerScreens} from '.';

registerScreens();
export const baseStack = () =>
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: appName,
            },
          },
        ],
      },
    },
  });
export const showModal = (props) => {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            id: 'modal',
            name: 'modal',
            passProps: {
              ...props,
            },
            options: {
              topBar: {
                title: {
                  text: 'Modal',
                },
              },
            },
          },
        },
      ],
    },
  });
};
export const navigateToHome = () =>
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'home',
            },
          },
        ],
      },
    },
  });
