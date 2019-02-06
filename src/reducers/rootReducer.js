import { combineReducers } from 'redux';
import list from './list'
import recommendation from './recommendation'

export default combineReducers({
 list,
 recommendation
});