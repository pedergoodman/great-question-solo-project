import { combineReducers } from 'redux';


const userJournals = (state = [], action) => {
  switch (action.type) {
    case 'SET_JOURNAL_LIST':
      console.log('in reducer setting userJournals');
      return action.payload;
    default:
      return state;
  }
}


const activeJournal = (state = {title: '', textBody: '', createdDate: '', lastEdited: ''}, action) => {
  switch (action.type) {
    case 'ON_ACTIVE_JOURNAL_CHANGE':
      return action.payload;
    default:
      return state;
  }
}


// journal will be on the redux state at:
// state.journal
export default combineReducers({
  userJournals,
  activeJournal
});
