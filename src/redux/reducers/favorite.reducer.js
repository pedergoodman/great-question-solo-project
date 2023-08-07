const favoriteQuestions = (state = [], action) => {

  switch (action.type) {
    case 'SET_FAVORITES_LIST':
      return action.payload;
    default:
      return state;
  }
};


// questions will be on the redux state at:
// state.questions
export default favoriteQuestions;
