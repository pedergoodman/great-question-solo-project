import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { createQuestionList, createCategoryListItem } from "../../utils/utils";

function* fetchQuestions(action) {
  // const userId = action.payload
  // console.log('in question saga, payload is:', action.payload);
  try {
    // allQuestions comes in as an array of category objects
    const allQuestionsList = yield axios.get(`/api/questions/all`)
    // favoriteQuestions comes in as an array of category objects 
    const favoriteQuestionsList = yield axios.get(`/api/favorite`)
    // customQuestions comes in as an array of question objects
    const customQuestionsList = yield axios.get(`/api/questions/custom`)

    // checking data 
    console.log('allQuestionsList data is:', allQuestionsList.data);
    console.log('favoriteQuestionsList data is:', favoriteQuestionsList.data);
    console.log('customQuestionsList data is:', customQuestionsList.data);


    // TODO - convert fav questions to question object
    const favAsList = createQuestionList(favoriteQuestionsList.data)

    console.log('favAsList is converted', favAsList);



    // TODO - convert fav questions to category object
    // no id, categoryName = Favorites 
    console.log('createCategoryListItem favAsList result:', createCategoryListItem(favAsList, 'Favorites'));
    // TODO append to allQuestionsList


    // TODO - convert custom questions to category object
    console.log('createCategoryListItem customQuestionsList result:', createCategoryListItem(customQuestionsList, 'Custom Questions'));
    // no id, categoryName = Custom Questions
    // TODO append to allQuestionsList
    // TODO append to favoriteQuestionsList

    // TODO - send allQuestionsList package
    yield put({
      type: 'SET_QUESTION_LIST',
      payload: allQuestionsList.data
    })

    // TODO - send favoriteQuestionsList package
    yield put({
      type: 'SET_FAVORITES_LIST',
      payload: favoriteQuestionsList.data
    })




  } catch (error) {
    console.log('Error getting questions List', error);
  }

} // end fetchQuestions




function* questionSaga() {
  yield takeLatest('FETCH_QUESTIONS', fetchQuestions);
}

export default questionSaga;