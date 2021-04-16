// In App.js in a new project

import * as React from 'react';
import { View, Text , StatusBar} from 'react-native';
import Appnavigation from './src/AppNavigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/Redux/Store';



function App() {
  return (
    <React.Fragment>
    <StatusBar barStyle="light-content"/>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Appnavigation />
      </PersistGate>
    </Provider>
  </React.Fragment>
  );
}

export default App;