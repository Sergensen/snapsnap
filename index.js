import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import Wrapper from './src/containers/Wrapper';

const store = configureStore();

const Main = () => (
    <Provider store={store}>
      <Wrapper />
    </Provider>
);

export default Main;

AppRegistry.registerComponent('snapsnap', () => Main);
