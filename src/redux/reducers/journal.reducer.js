import { combineReducers } from 'redux';


const allUserJournals = (state = [], action) => {
  switch (action.type) {
    case 'SET_JOURNAL_LIST':
      return action.payload;
    case '':
      return {};
    default:
      return state;
  }
}


const activeJournal = (state = {title: '', textBody: '', createdDate: '', lastEdited: ''}, action) => {
  switch (action.type) {
    case '':
      return action.payload;
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
