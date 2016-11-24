import {combineReducers} from 'redux';

import gameSession from './reducers/gameSession';

const rootReducer = combineReducers({gameSession});

export default rootReducer;
