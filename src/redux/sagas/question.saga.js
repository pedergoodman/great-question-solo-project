import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { createQuestionList, createCategoryListItem } from "../../utils/utils";

function* fetchQuestions(action) {
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

    // put to grab user questions, send allCategories along 
    yield put({ 
      type: 'FETCH_USER_QUESTIONS',
      payload: allCategoriesList
    })

  } catch (error) {
    console.log('Error getting questions List', error);
  }

} // end fetchQuestions



// FAVORITES & CUSTOM SAGA
function* fetchUserQuestions(action) {

  try {
    
    // passed allCategoriesList from first axios call
    let allCategoriesList = action.payload 
    // favoriteQuestions comes in as an array of category objects 
    const favoriteQuestionsResult = yield axios.get(`/api/favorite`)
    // customQuestions comes in as an array of question objects
    const customQuestionsResult = yield axios.get(`/api/questions/custom`)

    // set to variables so it's easier to work with
    const favoriteCategoryList = favoriteQuestionsResult.data
    const customQuestionsList = customQuestionsResult.data


    // Converting to "category objects"
    // convert fav questions to "question object"
    const favAsQuestionList = createQuestionList(favoriteCategoryList)
    // convert fav and custom questions to "category object"
    const favAsCategory = createCategoryListItem(favAsQuestionList, 'Favorites');
    const customAsCategory = createCategoryListItem(customQuestionsList, 'Custom Questions')



    // add to allQuestionsList
      allCategoriesList.push(favAsCategory)
      allCategoriesList.push(customAsCategory)
    // add to favorites list
    favoriteCategoryList.push(customAsCategory)
    console.group('Inside user question saga')
      console.log('NEW allCategoriesList data is:', allCategoriesList);
      console.log('favoriteQuestionsList data is:', favoriteCategoryList);
      console.log('customQuestionsList data is:', customQuestionsList);
    console.groupEnd
    // // TODO - send favoriteQuestionsList package
    yield put({
      type: 'SET_FAVORITES_LIST',
      payload: favoriteCategoryList
    })

    // should only get here if a user is logged in. 
    yield put({
      type: 'SET_QUESTION_LIST',
      payload: allCategoriesList
    })



  } catch (error) {
    console.log('Error getting user questions lists', error);
  }
} // END fetchUserQuestions



function* questionSaga() {
  yield takeLatest('FETCH_QUESTIONS', fetchQuestions);
  yield takeLatest('FETCH_USER_QUESTIONS', fetchUserQuestions);
}

export default questionSaga;