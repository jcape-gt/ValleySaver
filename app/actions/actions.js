import {API, graphqlOperation} from 'aws-amplify';
import {listCategorys} from '../graphql/queries';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_POSTS';

function requestCategories() {
  return {
    type: REQUEST_CATEGORIES,
  };
}

function receiveCategories(json) {
  return {
    type: RECEIVE_CATEGORIES,
    categories: json.data.listCategorys.items.map((child) => ({
      name: child.name,
      description: child.description,
    })),
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

    return API.graphql(graphqlOperation(listCategorys)).then((json) =>
      // We can dispatch many times!
      // Here, we update the app state with the results of the API call.

      dispatch(receiveCategories(json)),
    );
  };
}
