import { call, put, takeEvery } from 'redux-saga/effects'
import ApiService from './../services/api.service';
import { ARTICLE_ACTIONS } from './../actions';

function* fetchArticles(action) {
  try {
    const res = yield call(ApiService.getArticles);
    yield put({ type: ARTICLE_ACTIONS.API_GET_ARTICLES_SUCCESS, articles: res.articles });
  } catch (e) {
    yield put({ type: ARTICLE_ACTIONS.API_GET_ARTICLES_SUCCESS_FAILURE, error: e.message });

  }
}

function* fetchArticle(action) {

  try {
    const res = yield call(ApiService.getArticle, action.articleId);
    yield put({ type: ARTICLE_ACTIONS.API_GET_ARTICLE_SUCCESS, article: res.article });
  } catch (e) {
    yield put({ type: ARTICLE_ACTIONS.API_GET_ARTICLE_FAILURE, article: null, error: true, message: e.message });
  }
}

function* postArticle(action) {

  try {
    const res = yield call(ApiService.postArticle, action.article);
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