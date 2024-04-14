import { combineReducers } from 'redux';

const blankQuestionCard = {
  questionId: '',
  questionText: '',
  categoryId: '',
  categoryName: '',
  isFavorited: '',
}

const currentRandomQuestion = (state = blankQuestionCard, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_QUESTION':
      console.log('made it to the reducer, question state is:', action.payload);
      return action.payload;
    default:
      return state;
  }
}


// journal will be on the redux state at:
// state.randomCard.*

export default combineReducers({
  currentRandomQuestion,
});