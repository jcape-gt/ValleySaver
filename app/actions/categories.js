import fetch from 'cross-fetch';

export const FETCH_CATEGORIES_BEGIN = 'FETCH_CATEGORIES_BEGIN';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
// TODO: add failure action

function requestCategories() {
  return {
    type: FETCH_CATEGORIES_BEGIN,
  };
}

function receiveCategories(json) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    items: json,
    receivedAt: Date.now(),
  };
}

export function fetchCategories() {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(requestCategories());

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(
      'https://q5dfc5aq5b.execute-api.us-east-1.amazonaws.com/dev/category',
    )
      .then(
        (response) => response.json(),
        // Do not use catch, because errors occured during rendering
        // should be handled by React Error Boundaries
        // https://reactjs.org/docs/error-boundaries.html
      )
      .then((json) =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        {
          return dispatch(receiveCategories(json));
        },
      );
  };
}
