 import jsonPlaceholder  from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const response = jsonPlaceholder.get('/posts');

  dispatch({
    type: 'FETCH_POSTS',
    payload: response
  });
};
