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
    posts: json.data.children.map((child) => child.data),
    receivedAt: Date.now(),
  };
}
