import { combineReducers } from 'redux';

// import all reducers here like below
import complimentReducer from './complimentReducer';

// combine reducers
const reducers = combineReducers({
  compliments: complimentReducer,
});

// make the combined reducers available for import
export default reducers;
