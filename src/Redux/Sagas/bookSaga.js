import { put, call, takeEvery } from 'redux-saga/effects'
import { ADD_BOOK_REQUEST, ADD_BOOK_SUCCESS } from '../Types';

export const addBookSaga = function* addBookSaga({params}) {
    yield put({type: ADD_BOOK_SUCCESS, payload : params})
}


function* bookSaga() {
    yield takeEvery(ADD_BOOK_REQUEST,addBookSaga);
}

export default bookSaga;