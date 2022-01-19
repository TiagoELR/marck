import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import listReducer from './reducers';

const rootReducer = combineReducers({listReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
