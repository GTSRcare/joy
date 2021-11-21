//we need to import the action types

import * as types from '../constants/actionTypes';

//we need to initalize the orginal state

// export const LOGIN = 'LOGIN';
// export const SIGN_UP = 'SIGN_UP';

// export const GET_COMPLIMENT = 'GET_COMPLIMENT';
// export const POST_COMPLIMENT = 'POST_COMPLIMENT';
// export const DELETE_COMPLIMENT = 'DELETE_COMPLIMENT';
// export const PATCH_COMPLIMENT = 'PATCH_COMPLIMENT';
const initialState = {
  complimentsList: [],
  user_id: null,
  tagsList: [],
};

const complimentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      //set user_id
      return { ...state, user_id: action.payload };
    case types.SIGN_UP:
      //set user_id
      return { ...state, user_id: action.payload };
    case types.GET_COMPLIMENT:
      //assign compliment list to the list fetched from get request
      return { ...state, complimentsList: action.payload };

    case types.POST_COMPLIMENT:
      //add new compliment to compliment list
      const newComplimentsList = [...state.complimentsList].push(
        action.payload
      );
      return { ...state, complimentsList: newComplimentsList };
    case types.PATCH_COMPLIMENT: {
      //update patched compliment in compliment list
      const newComplimentsList = [...state.complimentsList].map((obj) => {
        if (obj.id === action.payload.id)
          return Object.assign({}, obj, action.payload);
        else return obj;
      });
    }
      return { ...state, complimentsList: newComplimentsList };
    case types.DELETE_COMPLIMENT: {
      //remove deleted compliment from compliment list
      const newComplimentsList = [...state.complimentsList].filter(
        (obj) => obj.id !== action.payload
      );
      return { ...state, complimentsList: newComplimentsList };
    }
    
    default:
      return state;
  }
};
export default complimentReducer;
