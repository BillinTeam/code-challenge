import React from 'react'
import ReactDOM from 'react-dom'
// import { createStore, combineReducers } from 'redux'
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// import { createBrowserHistory } from 'history';

import * as reducers from './reducers/index'
import App from './App';
import Article from './components/Article'
import Cards from './components/Cards'
import Form from './components/Form'


// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }), composeWithDevTools(
    // applyMiddleware(...middleware),
    // other store enhancers if any
  )
)

// const history = syncHistoryWithStore(createBrowserHistory(), store);
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute  component={Cards} />
        <Route path="/article/:id" component={Article} >
        </Route>
        <Route path="/article/:id/edit" component={Form} >
        </Route>
        <Route path="/articles/new" component={Form} >
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)