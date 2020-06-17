import reducer from './reducer';
import { createStore } from 'redux';
import { setUser } from './authUser';

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch(setUser('5'));

export default store;