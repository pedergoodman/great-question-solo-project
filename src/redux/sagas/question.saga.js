import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { useSelector } from 'react-redux';


function* fetchQuestions(action) {
  // const userId = action.payload
  // console.log('in question saga, payload is:', action.payload);
  try {
    const allQuestionsList = yield axios.get(`/api/questions/all`)
    // const favoriteQuestionsList = axios.get(`/api/questions/favories/${userId}`)
    // const customQuestionsList = axios.get(`/api/questions/custom/${userId}`)

    yield put({
      type: 'SET_QUESTION_LIST', 
      payload: allQuestionsList.data
    })
  } catch (error) {
    console.log('Error getting questions List', error);
  }

} // end fetchQuestions




function* questionSaga() {
  yield takeLatest('FETCH_QUESTIONS', fetchQuestions);
}

export default questionSaga;