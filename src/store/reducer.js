import {authUser} from './authUser';
import {users} from './users';
import {questions} from './questions'
import  { combineReducers } from 'redux';

const reducer = combineReducers({authUser,users,questions});

export default reducer;