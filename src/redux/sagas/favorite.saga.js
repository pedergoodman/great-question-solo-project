import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { useSelector } from 'react-redux';


// ADD a favorited question from the user_favorited table
function* addFavorite(action) {
  const questionID = {questionID: action.payload}
  // console.log('in saga, addFavorite, question id is:', questionID);

  try {
    yield axios.post('/api/favorite', questionID)
    yield put({
      type: 'FETCH_QUESTIONS'
    })

    
  } catch (error) {
    console.log('Error ADDING question to favs', error);

  }

} // end addFavorite

// REMOVE a favorited question from the user_favorited table
function* removeFavorite(action) {
  const questionID = action.payload
  // console.log('in saga, removeFavorite, question id is:', questionID);

  try {
    yield axios.delete(`/api/favorite/${questionID}`);
    yield put({
      type: 'FETCH_QUESTIONS'
    })

  } catch (error) {
    console.log('Error REMOVING question from favs', error);
  }

} // end addFavorite


function* favoriteSaga() {
  yield takeLatest('ADD_FAVORITE', addFavorite);
  yield takeLatest('REMOVE_FAVORITE', removeFavorite);
}

export default favoriteSaga;