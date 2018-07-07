import { combineReducers } from 'redux';
import ArticlesReducer from './articles.reducer';
import ServerReducer from './server.reducer';
import SelectedArticleReducer from './selected-article.reducer';

const rootReducer = combineReducers({
  server: ServerReducer,
  articles: ArticlesReducer,
  selectedArticle: SelectedArticleReducer
});

export default rootReducer;
