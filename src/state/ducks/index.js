import { combineReducers } from 'redux';
import { reducer as authReducer } from "./auth";
import { reducer as serverReducer } from "./server";
import { articleReducer, articlesReducer, filtersReducer} from './articles/reducers';

const rootReducer = combineReducers({
    auth: authReducer,
    server: serverReducer,
    article: articleReducer,
    articles: articlesReducer, 
    filters: filtersReducer
});

export default rootReducer;