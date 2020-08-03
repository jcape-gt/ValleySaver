import {FETCH_DEALS_BEGIN, FETCH_DEALS_SUCCESS} from '../actions/deals';

const defaultState = {
  isFetching: false,
  didInvalidate: false,
  items: [],
};

function Deals(state = defaultState, action) {
  switch (action.type) {
    case FETCH_DEALS_BEGIN:
      return {...state, isFetching: true, didInvalidate: false};

    case FETCH_DEALS_SUCCESS:
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

export default Deals;
