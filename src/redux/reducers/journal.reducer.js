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

const defaultActiveJournalState = {
  journalId: '',
  journalTitle: '',
  journalBody: '',
  questionId: '',
  questionText: '',
  // don't need these, here for reference 
  editedDate: '',
  categoryId: '',
  categoryName: '',
  createdDate: '',
}

const activeJournal = (state = defaultActiveJournalState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_JOURNAL':
      // TODO - check note if this needed to be anything special
      // should just be passing a question object or a journal object
      return action.payload;
    case 'ON_ACTIVE_JOURNAL_CHANGE':
      // TODO - check notes for formatting
      return action.payload;
    case 'CLEAR_ACTIVE_JOURNAL':
      // TODO - check notes for formatting
      return defaultActiveJournalState;
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
