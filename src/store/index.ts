import {createStore, combineReducers} from 'redux';
import {langReducer} from './langReducer';
import {themeReducer} from './themeReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({langReducer, themeReducer});

export const store = createStore(rootReducer, composeWithDevTools());
