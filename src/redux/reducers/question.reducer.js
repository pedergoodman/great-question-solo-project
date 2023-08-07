const allQuestions = (state = [], action) => {

  switch (action.type) {
    case 'SET_QUESTION_LIST':
      return action.payload;
    default:
      return state;
  }
};


// Do I need a separate reducer for the user specific questions
// added & favorites?? 
// this could be a separate reducer for security and for
  // if not empty add to DOM, else just do the stuff above
// probably need to add security where I don't grab any user data from the query. 



// questions will be on the redux state at:
// state.questions
export default allQuestions;
