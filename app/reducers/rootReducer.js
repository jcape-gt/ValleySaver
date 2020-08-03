import {combineReducers} from 'redux';
import categories from './categories';
import deals from './deals';

export default combineReducers({
  categories,
  deals,
});
