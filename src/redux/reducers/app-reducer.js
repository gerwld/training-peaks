const SET_INIT = "@@training-app/app-reducer/SET_INIT";
const SET_CREATEMODE = "@@training-app/app-reducer/SET_CREATEMODE";

export const setInit = (payload) => ({ type: SET_INIT, payload });
export const setCreateMode = (isCreate) => ({ type: SET_CREATEMODE, isCreate });

let initialState = {
 isInit: false,
 isCreateMode: false,
 isEditMode: false,
 currentObj: null
};

export default function appReducer(state = initialState, action) {
 switch (action.type) {
  case SET_INIT:
   return { ...state, isInit: action.payload };
  case SET_CREATEMODE:
   return { ...state, isCreateMode: action.isCreate };
  case "TOGGLE_EDIT":
   return { ...state, 
    currentObj: action.payload,
    isEditMode: !state.isEditMode };
  default:
   return state;
 }
}
