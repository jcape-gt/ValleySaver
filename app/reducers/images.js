import {FETCH_IMAGE_BEGIN, FETCH_IMAGE_SUCCESS} from '../actions/images';

const defaultState = {
  isFetching: false,
  didInvalidate: false,
  items: [],
};

function Images(state = defaultState, action) {
  switch (action.type) {
    case FETCH_IMAGE_BEGIN:
      return {...state, isFetching: true, didInvalidate: false};

    case FETCH_IMAGE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.items,
        lastUpdate: action.receivedAt,
      };
    default:
      return state;
  }
}

export default Images;
