import { all } from 'redux-saga/effects';
import bookSaga from './bookSaga';

//Main Root Saga
const rootSaga = function* rootSaga() {
  yield all([
    bookSaga(),
  ])
}
export default rootSaga;