import React from 'react';
import {ActivityIndicator} from 'react-native';

import WebView from 'react-native-webview';

const Modal = ({uri}) => {
  return (
    <WebView
      source={{
        uri,
      }}
      startInLoadingState
      renderLoading={() => (
        <ActivityIndicator color="black" style={{paddingBottom: 150}} />
      )}
    />
  );
};
Modal.options = {
  topBar: {
    leftButtons: {
      id: 'dismiss',
      title: 'Done',
    },
  },
};
export default Modal;
