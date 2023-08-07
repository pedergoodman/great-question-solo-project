import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { createQuestionList, createCategoryListItem } from "../../utils/utils";

function* fetchQuestions(action) {
  // const userId = action.payload
  // console.log('in question saga, payload is:', action.payload);
  try {
    // allQuestions comes in as an array of category objects
    const allQuestionsResult = yield axios.get(`/api/questions/all`)
    // favoriteQuestions comes in as an array of category objects 
    const favoriteQuestionsResult = yield axios.get(`/api/favorite`)
    // customQuestions comes in as an array of question objects
    const customQuestionsResult = yield axios.get(`/api/questions/custom`)

    // query results to variables
    let allCategoriesList = allQuestionsResult.data
    let favoriteCategoryList = favoriteQuestionsResult.data
    let customQuestionsList = customQuestionsResult.data

    console.log('allCategoriesList data is:', allCategoriesList);
    console.log('favoriteQuestionsList data is:', favoriteCategoryList);
    console.log('customQuestionsList data is:', customQuestionsList);

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


    // send allQuestionsList to reducer 
    yield put({
      type: 'SET_QUESTION_LIST',
      payload: allCategoriesList
    })

    // // TODO - send favoriteQuestionsList package
    yield put({
      type: 'SET_FAVORITES_LIST',
      payload: favoriteCategoryList
    })

  } catch (error) {
    console.log('Error getting questions List', error);
  }

} // end fetchQuestions




function* questionSaga() {
  yield takeLatest('FETCH_QUESTIONS', fetchQuestions);
}

export default questionSaga;