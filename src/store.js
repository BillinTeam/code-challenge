import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from "redux-saga";
import rootReducer from './reducers'
import mySaga from './sagas'
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
export const store = createStore(

    connectRouter(history)(persistedReducer),
    compose(
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware
        )
    )
);
export const persistor = persistStore(store);

// then run the saga
sagaMiddleware.run(mySaga)
