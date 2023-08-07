const allQuestions = (state = [], action) => {

  switch (action.type) {
    case 'SET_QUESTION_LIST':
      return action.payload;
    default:
      return state;
  }
};



// questions will be on the redux state at:
// state.questions
export default allQuestions;
