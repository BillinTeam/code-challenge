import {combineReducers} from 'redux';
import * as auth from "./auth";
import * as articles from "./articles";
import * as server from "./server";

const rootReducer = combineReducers({
    auth: auth.reducer,
    server: server.reducer,
    ...articles.reducer
});

export default rootReducer;