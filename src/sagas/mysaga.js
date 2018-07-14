import { call, put, takeEvery } from 'redux-saga/effects'
import { articleService, authService } from '../services';
import { ARTICLE_ACTIONS, AUTH_ACTIONS } from '../actions';

function* fetchArticles(action) {

  try {
    const res = yield call(articleService.getArticles, action.filters);
    yield put({ type: ARTICLE_ACTIONS.API_GET_ARTICLES_SUCCESS, articles: res.articles, errors: res.errors||false });
  } catch (e) {
    yield put({ type: ARTICLE_ACTIONS.API_GET_ARTICLES_FAILURE, errors: e.errors });
  }
}

function* fetchAvailableFilters(action) {

  try {
    const res = yield call(articleService.getAvailableFilters);
    yield put({ type: ARTICLE_ACTIONS.API_GET_FILTERS_SUCCESS, availableFilters: res.availableFilters, errors: res.errors||false });
  } catch (e) {
    yield put({ type: ARTICLE_ACTIONS.API_GET_FILTERS_FAILURE, errors: e.errors });
  }
}

function* fetchArticle(action) {

  try {
    const res = yield call(articleService.getArticle, action.articleId);
    yield put({ type: ARTICLE_ACTIONS.API_GET_ARTICLE_SUCCESS, article: res.article, errors: res.errors || false });
  } catch (e) {
    yield put({ type: ARTICLE_ACTIONS.API_GET_ARTICLE_FAILURE, errors: e.errors });
  }
}

function* createArticle(action) {
  try {
    const res = yield call(articleService.createArticle, action.article);
    yield put({
      type: ARTICLE_ACTIONS.API_CREATE_ARTICLE_SUCCESS, 
      articles: res.createArticle.articles, 
      article: res.createArticle.article,
      errors: res.errors || null });
  } catch (e) {
    yield put({ type: ARTICLE_ACTIONS.API_CREATE_ARTICLE_FAILURE, errors: e.errors });

  }
}

function* updateArticle(action) {
  try {
    const res = yield call(articleService.updateArticle, action.article);

    yield put({ 
      type: ARTICLE_ACTIONS.API_UPDATE_ARTICLE_SUCCESS, 
      articles: res.updateArticle.articles, 
      article: res.updateArticle.article, 
      errors: res.errors || false 
    });
  } catch (e) {
    yield put({ type: ARTICLE_ACTIONS.API_UPDATE_ARTICLE_FAILURE, errors: e.errors });

  }
}

function* deleteArticles(action) {
  try {
    const res = yield call(articleService.deleteArticles, action.articleIds);
    yield put({ 
      type: ARTICLE_ACTIONS.API_DELETE_ARTICLES_SUCCESS, 
      articles: res.deleteArticles.articles, 
      errors: res.errors || false 
    });
  } catch (e) {
    yield put({ type: ARTICLE_ACTIONS.API_DELETE_ARTICLES_FAILURE, errors: e.errors });

  }
}
/**
 * NON GRAPHQL REQUESTS
 */
function* doLogin(action) {
  try {
    const res = yield call(authService.login, action.credentials);
    yield put({ type: AUTH_ACTIONS.API_AUTH_SUCCESS, me: res.data.me });
  } catch (e) {
    yield put({ type: AUTH_ACTIONS.API_AUTH_FAILURE, errors: e.errors });
  }
}

function* doLogout(action) {
  try {
    yield call(authService.logout, action.credentials);
    yield put({ type: AUTH_ACTIONS.API_LOGOUT_SUCCESS });
  } catch (e) {
    yield put({ type: AUTH_ACTIONS.API_LOGOUT_FAILURE, errors: e.errors });

  }
}

/* Saga inspect each dispatch(...) looking for the desired actions */
function* mySaga() {
  /* Articles */
  yield takeEvery(ARTICLE_ACTIONS.API_GET_ARTICLES_REQUEST, fetchArticles);
  yield takeEvery(ARTICLE_ACTIONS.API_GET_ARTICLE_REQUEST, fetchArticle);
  yield takeEvery(ARTICLE_ACTIONS.API_CREATE_ARTICLE_REQUEST, createArticle);
  yield takeEvery(ARTICLE_ACTIONS.API_UPDATE_ARTICLE_REQUEST, updateArticle);
  yield takeEvery(ARTICLE_ACTIONS.API_DELETE_ARTICLES_REQUEST, deleteArticles);
  yield takeEvery(ARTICLE_ACTIONS.API_GET_FILTERS_REQUEST, fetchAvailableFilters);

  /* Auth */
  yield takeEvery(AUTH_ACTIONS.API_AUTH_REQUEST, doLogin);
  yield takeEvery(AUTH_ACTIONS.API_LOGOUT_REQUEST, doLogout);
}



export default mySaga;