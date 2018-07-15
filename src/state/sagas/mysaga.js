import { call, put, takeEvery } from 'redux-saga/effects'
import { articleService, authService } from '../../services';

import { articleTypes } from '../ducks/articles';
import { authTypes } from '../ducks/auth';

function* fetchArticles(action) {

  try {
    const res = yield call(articleService.getArticles, action.filters);
    yield put({ type: articleTypes.GET_ARTICLES_SUCCESS, articles: res.articles, errors: res.errors || false });
  } catch (e) {
    yield put({ type: articleTypes.GET_ARTICLES_FAILURE, errors: e.errors });
  }
}

function* fetchFilters(action) {

  try {
    const res = yield call(articleService.getFilters);
    yield put({ type: articleTypes.GET_FILTERS_SUCCESS, filters: res.filters, errors: res.errors || false });
  } catch (e) {
    yield put({ type: articleTypes.GET_FILTERS_FAILURE, errors: e.errors });
  }
}

function* fetchArticle(action) {

  try {
    const res = yield call(articleService.getArticle, action.articleId);
    yield put({ type: articleTypes.GET_ARTICLE_SUCCESS, article: res.article, errors: res.errors || false });
  } catch (e) {
    yield put({ type: articleTypes.GET_ARTICLE_FAILURE, errors: e.errors });
  }
}

function* createArticle(action) {
  try {
    const res = yield call(articleService.createArticle, action.article);
    yield put({
      type: articleTypes.CREATE_ARTICLE_SUCCESS,
      articles: res.createArticle.articles,
      article: res.createArticle.article,
      errors: res.errors || null
    });
  } catch (e) {
    yield put({ type: articleTypes.CREATE_ARTICLE_FAILURE, errors: e.errors });

  }
}

function* updateArticle(action) {
  try {
    const res = yield call(articleService.updateArticle, action.article);

    yield put({
      type: articleTypes.UPDATE_ARTICLE_SUCCESS,
      articles: res.updateArticle.articles,
      article: res.updateArticle.article,
      errors: res.errors || false
    });
  } catch (e) {
    yield put({ type: articleTypes.UPDATE_ARTICLE_FAILURE, errors: e.errors });

  }
}

function* deleteArticles(action) {
  try {
    const res = yield call(articleService.deleteArticles, action.articleIds);
    yield put({
      type: articleTypes.DELETE_ARTICLES_SUCCESS,
      articles: res.deleteArticles.articles,
      errors: res.errors || false
    });
  } catch (e) {
    yield put({ type: articleTypes.DELETE_ARTICLES_FAILURE, errors: e.errors });

  }
}
/**
 * NON GRAPHQL REQUESTS
 */
function* doLogin(action) {
  try {
    const res = yield call(authService.login, action.credentials);
    yield put({ type: authTypes.API_AUTH_SUCCESS, me: res.data.me });
  } catch (e) {
    yield put({ type: authTypes.API_AUTH_FAILURE, errors: e.errors });
  }
}

function* doLogout(action) {
  try {
    yield call(authService.logout, action.credentials);
    yield put({ type: authTypes.API_LOGOUT_SUCCESS });
  } catch (e) {
    yield put({ type: authTypes.API_LOGOUT_FAILURE, errors: e.errors });

  }
}

/* Saga inspect each dispatch(...) looking for the desired actions */
function* mySaga() {
  /* Articles */
  yield takeEvery(articleTypes.GET_ARTICLES_REQUEST, fetchArticles);
  yield takeEvery(articleTypes.GET_ARTICLE_REQUEST, fetchArticle);
  yield takeEvery(articleTypes.CREATE_ARTICLE_REQUEST, createArticle);
  yield takeEvery(articleTypes.UPDATE_ARTICLE_REQUEST, updateArticle);
  yield takeEvery(articleTypes.DELETE_ARTICLES_REQUEST, deleteArticles);
  yield takeEvery(articleTypes.GET_FILTERS_REQUEST, fetchFilters);

  /* Auth */
  yield takeEvery(authTypes.AUTH_REQUEST, doLogin);
  yield takeEvery(authTypes.LOGOUT_REQUEST, doLogout);
}



export default mySaga;