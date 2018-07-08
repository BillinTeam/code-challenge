import { call, put, takeEvery } from 'redux-saga/effects'
import ApiService from './../services/api.service';
import { ARTICLES_QUERY, ARTICLE_QUERY, ARTICLE_INSERT } from './../services/queries';
import {ARTICLE_ACTIONS} from './../actions';

function* fetchArticles(action) {
  try {
    const res = yield call(ApiService.post, ARTICLES_QUERY);

    yield put({ type: ARTICLE_ACTIONS.API_GET_ARTICLES_SUCCESS, articles: res.data.articles });

  } catch (e) {

    yield put({ type: ARTICLE_ACTIONS.API_GET_ARTICLES_SUCCESS_FAILURE, error: e.message });

  }
}

function* fetchArticle(action) {

  try {
    const res = yield call(ApiService.post, ARTICLE_QUERY(action.articleId));

    yield put({ type: ARTICLE_ACTIONS.API_GET_ARTICLE_SUCCESS, article: res.data.articles[0] });

  } catch (e) {
    yield put({ type: ARTICLE_ACTIONS.API_GET_ARTICLE_FAILURE, article: null, error: true, message: e.message });

  }
}

function* postArticle(action) {

  try {
    const res = yield call(ApiService.post, ARTICLE_INSERT(action.article));

    yield put({ type: ARTICLE_ACTIONS.API_POST_ARTICLE_SUCCESS, article: res.data.articles[0] });

  } catch (e) {
    yield put({ type: ARTICLE_ACTIONS.API_POST_ARTICLE_FAILURE, article: null, error: true, message: e.message });

  }
}

/* Saga inspect each dispatch(...) looking for the desired actions */
function* mySaga() {
  yield takeEvery(ARTICLE_ACTIONS.API_GET_ARTICLES_REQUEST, fetchArticles);
  yield takeEvery(ARTICLE_ACTIONS.API_GET_ARTICLE_REQUEST, fetchArticle);
  yield takeEvery(ARTICLE_ACTIONS.API_POST_ARTICLE_REQUEST, postArticle);
}



export default mySaga;