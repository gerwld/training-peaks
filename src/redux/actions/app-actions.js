export const SET_INIT = "@@training-app/app-reducer/SET_INIT";
export const SET_CREATEMODE = "@@training-app/app-reducer/SET_CREATEMODE";

export const setInit = (payload) => ({ type: SET_INIT, payload });

export const setCreateMode = (isCreate, selectedDate) => 
({ type: SET_CREATEMODE, isCreate, selectedDate });

export const setFeelsMode = (currentFeelObj, isFeel, selectedDate) => 
({ type: "SET_FEELSMODE", selectedDate, currentFeelObj, isFeel });