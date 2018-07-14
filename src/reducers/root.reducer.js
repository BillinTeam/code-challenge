import { combineReducers } from 'redux';
import ArticlesReducer from './articles.reducer';
import ServerReducer from './server.reducer';
import SelectedArticleReducer from './selected-article.reducer';
import AuthReducer from './auth.reducer';
import FiltersReducer from './filters.reducer';

const rootReducer = combineReducers({
  server: ServerReducer,
  articles: ArticlesReducer,
  selectedArticle: SelectedArticleReducer,
  auth: AuthReducer,
  filters: FiltersReducer
});

export default rootReducer;
