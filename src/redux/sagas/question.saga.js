import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


// condensing these so refresh always grabs both
function* fetchQuestions(action) {
  yield put({ type: 'FETCH_GENERAL_QUESTIONS' })
  yield put({ type: 'FETCH_USER_QUESTIONS' })
}


// grab data for general categories
// user questions are omitted if user isn't logged in
function* fetchGeneralQuestions(action) {
  // const userId = action.payload
  // console.log('in question saga, payload is:', action.payload);
  // console.log('isAuthenticated is:', isAuthenticated);

  try {
    // allQuestions comes in as an array of category objects
    const allQuestionsResult = yield axios.get(`/api/questions/all`)
    // query results 
    const allCategoriesList = allQuestionsResult.data
    console.log('fetchQuestions saga, allCategoriesList data is:', allCategoriesList);

    // send allQuestionsList to reducer 
    yield put({
      type: 'SET_QUESTION_LIST',
      payload: allCategoriesList
    })

  } catch (error) {
    console.log('Error getting questions List', error);
  }

} // end fetchQuestions



// FAVORITES & CUSTOM SAGA
function* fetchUserQuestions(action) {

  try {
    // favoriteQuestions comes in as an array of category objects 
    const favoriteQuestionsResult = yield axios.get(`/api/favorite`)
    // customQuestions comes in as an array of question objects
    const customQuestionsResult = yield axios.get(`/api/questions/custom`)

    // set to variables so it's easier to work with
    const favoriteCategoryList = favoriteQuestionsResult.data
    const customQuestionsList = customQuestionsResult.data


    // // send favoriteQuestionsList package
    yield put({
      type: 'SET_FAVORITES_LIST',
      payload: favoriteCategoryList
    })

    // should only get here if a user is logged in. 
    yield put({
      type: 'SET_CUSTOM_QUESTIONS_LIST',
      payload: customQuestionsList
    })

  } catch (error) {
    console.log('Error getting user questions lists', error);
  }
} // END fetchUserQuestions


function* questionSaga() {
  yield takeLatest('FETCH_QUESTIONS', fetchQuestions);
  yield takeLatest('FETCH_GENERAL_QUESTIONS', fetchGeneralQuestions);
  yield takeLatest('FETCH_USER_QUESTIONS', fetchUserQuestions);
}

export default questionSaga;