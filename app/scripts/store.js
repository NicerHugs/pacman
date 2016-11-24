import { createStore } from 'redux'
import root from './reducer'

let store = createStore(root)

export default store;
