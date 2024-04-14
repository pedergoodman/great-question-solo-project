import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { func } from 'prop-types';

// FETCH journal list from DB, set list in reducer
function* fetchJournals(action) {

  try {
    // allQuestions comes in as an array of category objects
    const userJournalResult = yield axios.get(`/api/journals`)

    // query results 
    const userJournalList = userJournalResult.data
    console.log('userJournalList saga, userJournalList data is:', userJournalList);

    // send userJournalList to reducer 
    yield put({
      type: 'SET_JOURNAL_LIST',
      payload: userJournalList
    })

  } catch (error) {
    console.log('in saga, error getting journals List', error);
  }

}


// POST journal in DB, refresh journal list
function* createJournal(action) {

  try {
    // axios POST journal entry
    yield axios.post('/api/journals', action.payload)

    // refresh journal list
    yield put({ type: 'FETCH_JOURNALS' })
  } catch (error) {
    console.log('in saga, error adding journal', error);
  }
}

// UPDATE journal in DB, refresh journal list
function* updateJournal(action) {
  try {
    // axios PUT update journal entry
    yield axios.put('/api/journals', action.payload)

    // refresh journal list
    yield put({
      type: 'FETCH_JOURNALS'
    })

  } catch (error) {
    console.log('in saga, error updating journal', error);
  }
}


// DELETE journal from DB, refresh journal list
function* deleteJournal(action) {
  try {
    // send delete request
    yield axios.delete(`/api/journals/${action.payload}`)

    // refresh journal list
    yield put({
      type: 'FETCH_JOURNALS'
    })
  } catch (error) {
    console.log('in saga, error deleting journal', error);
  }
};




function* journalSaga() {
  yield takeLatest('FETCH_JOURNALS', fetchJournals);
  yield takeLatest('CREATE_JOURNAL', createJournal);
  yield takeLatest('UPDATE_JOURNAL', updateJournal);
  yield takeLatest('DELETE_JOURNAL', deleteJournal);
}

export default journalSaga;