import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux";

import { store, persistor, history } from "./store";
import Main from './components/Main';


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Main history={history} />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
