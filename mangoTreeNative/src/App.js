import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'

import Navigation from './Navigation'
import store from './store'

class mangoTreeNative extends React.Component {
  render() {
    console.log('store', store);
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('mangoTreeNative', () => mangoTreeNative);
