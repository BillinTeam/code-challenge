import { combineReducers } from 'redux';
import ArticlesReducer from './articles.reducer';
import ServerReducer from './server.reducer';

const rootReducer = combineReducers({
  server: ServerReducer,
  articles: ArticlesReducer
});

export default rootReducer;
