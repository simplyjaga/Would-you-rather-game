import {authUser} from './authUser';
import {users} from './users';
import  { combineReducers } from 'redux';

const reducer = combineReducers({authUser,users});

export default reducer;