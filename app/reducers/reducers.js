import {REQUEST_CATEGORIES, RECEIVE_CATEGORIES} from '../actions/actions';

function Categories(
  state = {
    isFetching: false,
    didInvalidate: false,
    categories: [],
  },
  action,
) {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return {...state, isFetching: true, didInvalidate: false};

    case RECEIVE_CATEGORIES:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
        categories: action.categories,
        lastUpdate: action.receivedAt,
      };
    default:
      return state;
  }
}

export default Categories;
