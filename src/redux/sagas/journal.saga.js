import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { func } from 'prop-types';


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


function* createJournal(action) {

  try {
    // TODO - axios POST
    console.log('in journal saga, create', action.payload);

    yield axios.post('/api/journals', action.payload)


    // refresh journal list
    yield put({
      type: 'FETCH_JOURNALS'
    })
  } catch (error) {
    console.log('in saga, error adding journal', error);
  }
}


function* updateJournal(action) {

  try {
    // TODO - axios PUT
    console.log('in journal saga, update', action.payload);

    yield axios.put('/api/journals', action.payload)

    // refresh journal list
    yield put({
      type: 'FETCH_JOURNALS'
    })
  } catch (error) {
    console.log('in saga, error updating journal', error);
  }
}








function* journalSaga() {
  yield takeLatest('FETCH_JOURNALS', fetchJournals);
  yield takeLatest('CREATE_JOURNAL', createJournal);
  yield takeLatest('UPDATE_JOURNAL', updateJournal);
}

export default journalSaga;