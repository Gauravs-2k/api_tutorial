import React from 'react';
import AppNav from './src/Navigation/navigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/store'

const App = () => {
  return (

    <Provider store={store}>
      <AppNav />
    </Provider>
  );
};

export default App;
