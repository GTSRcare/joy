// we want to import actionType constants
// https://react-redux.js.org/api/provider

// // import actionType constants
import * as types from '../constants/actionTypes';
import axios from 'axios';

export const loginActionCreator = (username, password) => {
  return function (dispatch) {
    const options = {
      username,
      password,
    };
    axios.post('/users/login', options).then((response) => {
      const randomIndex = Math.floor(
        Math.random() * response.data.complimentsList.length
      );
      const randomCompliment = response.data.complimentsList[randomIndex];
      const payload = response.data;
      payload.compliment = randomCompliment;
      dispatch({
        type: types.LOGIN,
        payload: payload,
      });
    });
  };
};

export const signUpActionCreator = (name, username, password) => {
  return function (dispatch) {
    const options = { username, password, name };
    axios.post('/users/signup', options).then((response) => {
      const randomIndex = Math.floor(
        Math.random() * response.data.complimentsList.length
      );
      const randomCompliment = response.data.complimentsList[randomIndex];
      const payload = response.data;
      payload.compliment = randomCompliment;
      dispatch({ type: types.SIGN_UP, payload: payload });
    });
  };
};

export const getComplimentActionCreator = (user, tag) => {
  return function (dispatch) {
    let URL = `/compliments?user=${user}`;
    const body = { user };
    if (tag) {
      body.tag = tag;
      URL += `&tag=${tag}`;
    }
    axios.get(URL, body).then((response) => {
      console.log('res dot data:', response.data);
      const randomIndex = Math.floor(Math.random() * response.data.complimentsList.length);
      console.log('randomIndex:', randomIndex);
      const randomCompliment = response.data.complimentsList[randomIndex];
      dispatch({
        type: types.GET_COMPLIMENT,
        // payload: response.data
        payload: {
          complimentsList: response.data.complimentsList,
          compliment: randomCompliment,
        },
      });
    });
  };
};

export const postComplimentActionCreator = (
  user,
  category,
  sender,
  message
) => {
  return function (dispatch) {
    const URL = `/compliments?user=${user}`;
    const body = { category, sender, message };
    axios.post(URL, body).then((response) => {
      console.log(response);
      dispatch({
        type: types.POST_COMPLIMENT,
        payload: response.data.compliment,
      });
    });
  };
};

export const deleteComplimentActionCreator = (user, id) => {
  return function (dispatch) {
    axios
      .delete(`/compliments?user=${user}&id=${id}`)
      .then((response) =>
        dispatch({ type: types.DELETE_COMPLIMENT, payload: id })
      );
  };
};
export const patchComplimentActionCreator = (
  // user,
  // id,
  // message,
  // sender,
  // category
  user,
  id,
  category
) => {
  return function (dispatch) {
    const URL = `/compliments?user=${user}&id=${id}`;
    // const body = { message, sender, category };
    const body = { category };
    axios.patch(URL, body).then((response) => {
      console.log(response);
      dispatch({
        type: types.PATCH_COMPLIMENT,
        payload: response.data.compliment,
      });
    });
  };
};
