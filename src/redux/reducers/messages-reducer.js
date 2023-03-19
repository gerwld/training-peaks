import { v4 as gererateId } from 'uuid';

const SET_MESSAGE = "@@training-app/messages-reducer/SET_MESSAGE";
const DEL_MESSAGE = "@@training-app/messages-reducer/DEL_MESSAGE";

export const setMessage = (message, isError) => ({ type: SET_MESSAGE, message, isError });
export const delMessage = (messageId) => ({ type: DEL_MESSAGE, messageId });

let initialState = {
 list: [],
};

export default function messagesReducer(state = initialState, action) {
 switch (action.type) {
  case SET_MESSAGE:
   return { ...state, 
    list: [...state.list, { message: action.message, isError: action.isError, id: gererateId() }] };
  case DEL_MESSAGE:
   return { ...state, 
    list: [...state.list].filter(({ id }) => id !== action.messageId) };
  default:
   return state;
 }
}
