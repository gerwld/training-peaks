const SET_INIT = "@@training-app/app-reducer/SET_INIT";

export const setInit = (payload) => ({ type: SET_INIT, payload });

let initialState = {
 isInit: false,
};

export default function appReducer(state = initialState, action) {
 switch (action.type) {
  case SET_INIT:
   return { ...state, isInit: action.payload };
  default:
   return state;
 }
}