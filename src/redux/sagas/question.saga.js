import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { createQuestionList, createCategoryListItem } from "../../utils/utils";

function* fetchQuestions(action) {
  // const userId = action.payload
  // console.log('in question saga, payload is:', action.payload);
  try {
    // allQuestions comes in as an array of category objects
    const allQuestionsResult = yield axios.get(`/api/questions/all`)
    console.log('allQuestionsResult is:', allQuestionsResult);
    // query results 
    const allCategoriesList = allQuestionsResult.data
    console.log('allCategoriesList data is:', allCategoriesList);

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


    // REFACTORING BELOW THIS LINE, MOVING THINGS ABOVE THAT I NEED HERE

/* // code to merge fav list data and 
    // BELOW HERE SHOULD BE MANAGED IN THE 

    // convert fav questions to "question object"
    const favAsQuestionList = createQuestionList(favoriteCategoryList)
    console.log('favAsList is converted', favAsQuestionList);


    // convert fav and custom questions to "category object"
    const favAsCategory = createCategoryListItem(favAsQuestionList, 'Favorites');
    const customAsCategory = createCategoryListItem(customQuestionsList, 'Custom Questions')

    console.log('favAsCategory is:', favAsCategory);
    console.log('customAsCategory is:', customAsCategory);

    // add to allQuestionsList
    allCategoriesList.push(favAsCategory)
    allCategoriesList.push(customAsCategory)
    console.log('NEW allCategoriesList data is:', allCategoriesList);

 */




  } catch (error) {
    console.log('Error getting questions List', error);
  }

} // end fetchQuestions



// FAVORITES & CUSTOM SAGA
function* fetchUserQuestions(action) {

  try {
    
    // passed allCategoriesList from first axios call
    const allCategoriesList = action.payload
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
    console.log('NEW allCategoriesList data is:', allCategoriesList);
    console.log('favoriteQuestionsList data is:', favoriteCategoryList);
    console.log('customQuestionsList data is:', customQuestionsList);

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