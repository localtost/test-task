import React from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from '../redux/store';
import {PersistGate} from 'redux-persist/integration/react';

export const withStore = (Component) => () => (props) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Component {...props} />
    </PersistGate>
  </Provider>
);
