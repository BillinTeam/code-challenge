import { call, put, takeEvery } from 'redux-saga/effects'
import ApiService from './../services/api.service';
import { ARTICLES_QUERY } from './../services/queries';

function* fetchArticles(action) {
  try {
    const articles = yield call(ApiService.post, ARTICLES_QUERY);

    yield put({ type: "API_CALL_SUCCESS", articles: articles.data.articles });

  } catch (e) {

    yield put({ type: "API_CALL_FAILURE", error: e.message });

  }
}

/* Saga inspect each dispatch(...) looking for the desired actions */
function* mySaga() {
  yield takeEvery("API_CALL_REQUEST", fetchArticles);
}



export default mySaga;