import {authUser} from './authUser';
import {users} from './users';
import {questions} from './questions';
import { loadingBarReducer } from 'react-redux-loading-bar';
import  { combineReducers } from 'redux';

const reducer = combineReducers({authUser,users,questions,loadingBar: loadingBarReducer});

export default reducer;