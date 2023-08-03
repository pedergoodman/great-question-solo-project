import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { useSelector } from 'react-redux';





function* addFavorite(action) {
  const questionID = action.payload
  console.log('in saga, addFavorite, question id is:', questionID);

  // try {
  //   yield axios.post('/api/questions/favorite', )
  // } catch (error) {
  //   console.log('Error getting questions List', error);
  // }

} // end addFavorite


function* removeFavorite(action) {
  const questionID = action.payload
  console.log('in saga, removeFavorite, question id is:', questionID);

  // try {
  //   yield axios.post(`/api/questions/favorite/:questionId`)
  // } catch (error) {
  //   console.log('Error getting questions List', error);
  // }

} // end addFavorite







function* favoriteSaga() {
  yield takeLatest('ADD_FAVORITE', addFavorite);
  yield takeLatest('REMOVE_FAVORITE', removeFavorite);
}

export default favoriteSaga;