import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';


import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import rootReducer from './reducers'
import mySaga from './sagas'


const history = createBrowserHistory();
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(
  connectRouter(history)(rootReducer),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    )
  )
)

// then run the saga
sagaMiddleware.run(mySaga)

ReactDOM.render(
  <Provider store={store}>
      <App history={history}/>
  </Provider>,
  document.getElementById('root')
);
