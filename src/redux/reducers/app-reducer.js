import { SET_CREATEMODE, SET_INIT } from "@/redux/actions/app-actions";

let initialState = {
 isInit: false,
 isCreateMode: false,
 isEditMode: false,
 isFeelsMode: false,
 currentObj: null,
 currentFeelsObj: null,
 selectedDate: null
};

export default function appReducer(state = initialState, action) {
 switch (action.type) {
  case SET_INIT:
   return { ...state, isInit: action.payload };
  case SET_CREATEMODE:
   return { ...state, 
    selectedDate: action.selectedDate,
    isCreateMode: action.isCreate };
  case "TOGGLE_EDIT":
   return { ...state, 
    currentObj: action.payload,
    isEditMode: !state.isEditMode };
    case "SET_EDIT":
   return { ...state, 
    currentObj: action.payload,
    isEditMode: action.isEditMode };


  case "SET_FEELSMODE":
    return { ...state, 
      selectedDate: action.selectedDate,
      currentFeelsObj: action.isFeel ? action.currentObj : null,
      isFeelsMode: action.isFeel };

  case "CLOSE_FEELSMODE":
    return { ...state, 
      selectedDate: null,
      currentFeelsObj: null,
      isFeelsMode: false };


  default:
   return state;
 }
}
