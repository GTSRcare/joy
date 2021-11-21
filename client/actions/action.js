// we want to import actionType constants
// https://react-redux.js.org/api/provider

// // import actionType constants
import * as types from '../constants/actionTypes';
import axios from 'axios';

// export const addCardActionCreator = marketId => ({
//   type: types.ADD_CARD,
//   payload: marketId,
// });

export const loginActionCreator = (username, password) => {
  const options = {
    username,
    password,
  };
  axios
    .post('/users/login', options)
    .then((response) =>
      dispatch({ type: types.LOGIN, payload: response.data.user_id })
    );
};

export const signUpActionCreator = (name, username, password) => {
  const options = { username, password, name };
  axios
    .post('/users/signup', options)
    .then((response) =>
      dispatch({ type: types.SIGN_UP, payload: response.data.user_id })
    );
};

export const getComplimentActionCreator = (user, tag) => {
  const URL = `/compliments?user=${user}`;
  const body = { user };
  if (tag) {
    body.tag = tag;
    URL += `&tag=${tag}`;
  }
  axios.get(URL, body).then((response) =>
    dispatch({
      type: type.GET_COMPLIMENT,
      payload: response.data.complimentsList,
    })
  );
};

export const postComplimentActionCreator = (
  user,
  category,
  sender,
  message
) => {
  const URL = `/compliments?user=${user}`;
  const body = { category, sender, message };
  axios.post(URL, body).then((response) =>
    dispatch({
      type: type.POST_COMPLIMENT,
      payload: response.data.compliment,
    })
  );
};

export const deleteComplimentActionCreator = (user, id) => {
  axios
    .delete(`/compliments?user=${user}&id=${id}`)
    .then((response) =>
      dispatch({ type: type.DELETE_COMPLIMENT, payload: id })
    );
};
export const patchComplimentActionCreator = (
  user,
  id,
  message,
  sender,
  category
) => {
  const URL = `/compliments?user=${user}&id=${id}`;
  const body = { message, sender, category };
  axios.patch(URL, body).then((response) =>
    dispatch({
      type: type.PATCH_COMPLIMENT,
      payload: response.data.compliment,
    })
  );
};
