import { combineReducers } from 'redux';


const allUserJournals = (state = [], action) => {
  switch (action.type) {
    case '':
      return action.payload;
    case '':
      return {};
    default:
      return state;
  }
}


const activeJournal = (state = {}, action) => {
  switch (action.type) {
    case '':
      return action.payload;
    case '':
      return {};
    default:
      return state;
  }
}


// journal will be on the redux state at:
// state.journal
export default combineReducers({
  allUserJournals,
  activeJournal
});
