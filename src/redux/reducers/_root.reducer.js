import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import journals from './journal.reducer'
import questions from './question.reducer';
import randomCard from './random.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  journals, // contains all journals of a logged in user & a store of an active journal edit
  questions, // contains a list of all the questions a user has access to: all, favorites, custom
  randomCard
});

export default rootReducer;
