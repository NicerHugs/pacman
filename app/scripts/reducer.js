import {combineReducers} from 'redux';

import gameSession from './reducers/gameSession';
import pac from './reducers/pac';
import ghosts from './reducers/ghosts';

const rootReducer = combineReducers({gameSession, pac, ghosts});

export default rootReducer;
