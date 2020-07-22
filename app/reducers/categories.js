import {
  FETCH_CATEGORIES_BEGIN,
  FETCH_CATEGORIES_SUCCESS,
} from '../actions/categories';

const defaultState = {
  isFetching: false,
  didInvalidate: false,
  categories: [],
};

function Categories(state = defaultState, action) {
  console.log('hello');
  switch (action.type) {
    case FETCH_CATEGORIES_BEGIN:
      return {...state, isFetching: true, didInvalidate: false};

    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        categories: action.categories,
        lastUpdate: action.receivedAt,
      };
    default:
      return state;
  }
}

export default Categories;
