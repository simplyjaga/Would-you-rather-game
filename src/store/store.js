import reducer from './reducer';
import { createStore } from 'redux';
import { setUser } from './authUser';
import { addAnswer, addQuestion } from './users';

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch(setUser('sarahedo'));

export default store;