import { combineReducers } from 'redux';

const allQuestions = (state = [], action) => {

  switch (action.type) {
    case 'SET_QUESTION_LIST':
      return action.payload;
    default:
      return state;
  }
};



const favoriteQuestions = (state = [], action) => {
  switch (action.type) {
    case 'SET_FAVORITES_LIST':
      return action.payload;
    default:
      return state;
  }
};

const customQuestions = (state = [], action) => {
  switch (action.type) {
    case 'SET_CUSTOM_QUESTIONS_LIST':
      return action.payload;
    default:
      return state;
  }
};


// questions will be on the redux state at:
// state.questions.<w/e question you want to accesss>
export default combineReducers({
  allQuestions,
  favoriteQuestions,
  customQuestions
});