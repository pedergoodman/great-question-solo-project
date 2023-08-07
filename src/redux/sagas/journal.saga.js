import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchJournals(action) {
  // const userId = action.payload
  // console.log('in question saga, payload is:', action.payload);
  // console.log('isAuthenticated is:', isAuthenticated);

  try {
    // allQuestions comes in as an array of category objects
    const userJournalResult = yield axios.get(`/api/journals`)
    // query results 
    const userJournalList = userJournalResult.data
    console.log('userJournalList saga, userJournalList data is:', userJournalList);

    // send allQuestionsList to reducer 
    yield put({
      type: 'SET_JOURNAL_LIST',
      payload: userJournalList
    })


  } catch (error) {
    console.log('Error getting journals List', error);
  }

} // end fetchQuestions







function* journalSaga() {
  yield takeLatest('FETCH_JOURNALS', fetchJournals);
}

export default journalSaga;