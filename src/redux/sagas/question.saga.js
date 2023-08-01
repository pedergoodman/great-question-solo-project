import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchQuestions(){
  try {
    
  } catch (error) {
    console.log('Error getting questions List', error);
  }
}










function* questionSaga() {
  yield takeLatest('FETCH_QUESTIONS', fetchQuestions);
  yield takeLatest('', );
}

export default questionSaga;