import { call, put, takeEvery } from 'redux-saga/effects'
import { articleService, authService } from '../services';
import { ARTICLE_ACTIONS, AUTH_ACTIONS } from '../actions';

function* fetchArticles(action) {

  try {
    const res = yield call(articleService.getArticles);
    yield put({ type: ARTICLE_ACTIONS.API_GET_ARTICLES_SUCCESS, articles: res.articles });
  } catch (e) {
    yield put({ type: ARTICLE_ACTIONS.API_GET_ARTICLES_SUCCESS_FAILURE, error: e.message });
  }
}

function* fetchArticle(action) {

  try {
    const res = yield call(articleService.getArticle, action.articleId);
    yield put({ type: ARTICLE_ACTIONS.API_GET_ARTICLE_SUCCESS, article: res.article });
  } catch (e) {
    yield put({ type: ARTICLE_ACTIONS.API_GET_ARTICLE_FAILURE, article: null, error: true, message: e.message });
  }
}

function* createArticle(action) {
  try {
    const res = yield call(articleService.createArticle, action.article);
    yield put({ type: ARTICLE_ACTIONS.API_CREATE_ARTICLE_SUCCESS, article: res.article });
  } catch (e) {
    yield put({ type: ARTICLE_ACTIONS.API_CREATE_ARTICLE_FAILURE, article: null, error: true, message: e.message });

  }
}

function* updateArticle(action) {
  try {
    const res = yield call(articleService.updateArticle, action.article);
    yield put({ type: ARTICLE_ACTIONS.API_UPDATE_ARTICLE_SUCCESS, article: res.articles });
  } catch (e) {
    yield put({ type: ARTICLE_ACTIONS.API_UPDATE_ARTICLE_FAILURE, article: null, error: true, message: e.message });

  }
}

function* deleteArticles(action) {
  try {
    const res = yield call(articleService.deleteArticles, action.articleIds);
    yield put({ type: ARTICLE_ACTIONS.API_DELETE_ARTICLES_SUCCESS, articles: res.articles });
  } catch (e) {
    yield put({ type: ARTICLE_ACTIONS.API_DELETE_ARTICLES_FAILURE, error: true, message: e.message });

  }
}

function* doLogin(action) {
  try {
    const res = yield call(authService.login, action.credentials);
    yield put({ type: AUTH_ACTIONS.API_AUTH_SUCCESS, me: res.me });
  } catch (e) {
    yield put({ type: AUTH_ACTIONS.API_AUTH_FAILURE, error: true, message: e.message });

  }
}

function* doLogout(action) {
  try {
    yield call(authService.logout, action.credentials);
    yield put({ type: AUTH_ACTIONS.API_LOGOUT_SUCCESS });
  } catch (e) {
    yield put({ type: AUTH_ACTIONS.API_LOGOUT_FAILURE, error: true, message: e.message });

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

  /* Auth */
  yield takeEvery(AUTH_ACTIONS.API_AUTH_REQUEST, doLogin);
  yield takeEvery(AUTH_ACTIONS.API_LOGOUT_REQUEST, doLogout);
}



export default mySaga;