import {combineReducers} from 'redux';
import {REQUEST_CATEGORIES, RECEIVE_CATEGORIES} from '../actions/actions';

function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
  },
  action,
) {
  console.log('hello');
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return {...state, isFetching: true, didInvalidate: false};

    case RECEIVE_CATEGORIES:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
        items: action.posts,
        lastUpdate: action.receivedAt,
      };
    default:
      return state;
  }
}

export default posts;
