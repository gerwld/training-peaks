import axios from "axios";
import AuthService from "@/api/AuthService";
import showMessage from "react-hot-toast";
import { setAxiosSession } from "../../utils/setAxiosSession";

const LOGOUT = "@@training-app/dash-reducer/LOGOUT";
const SET_USER_DATA = "@@training-app/dash-reducer/SET_USER_DATA";
const SET_REG_STATUS = "@@training-app/dash-reducer/SET_REG_STATUS";

export const setUserData = (data) => ({ type: SET_USER_DATA, data });
export const setRegStatus = (status) => ({ type: SET_REG_STATUS, status });
export const setRegError = (message) => ({ type: REG_ERROR, message });
export const setLogError = (message) => ({ type: LOG_ERROR, message });
export const setLogout = ({ type: LOGOUT });

let initialState = {
 authErr: null,
 authObj: null,
 regSuccess: false,
 regErr: null,
};

export default function authReducer(state = initialState, action) {
 switch (action.type) {
  case SET_USER_DATA:
   return {
    ...state,
    authErr: null,
    authObj: action.data,
   };
  case SET_REG_STATUS:
   return {
    ...state,
    regSuccess: action.status,
   };
  case LOGOUT:
    return {...state, authObj: null}

  default:
   return state;
 }
}

export const userAuth = (authData) => {
 return async (dispatch) => {
  const fetch = AuthService.getAuth({ password: authData.pass, email: authData.email });
  fetch
  .then((authRes) => {
    localStorage.setItem("session", `Bearer ${authRes.data}`);
    setTimeout(() => 
    dispatch(getUser(`Bearer ${authRes.data}`))
    , 1000);
   })
   .catch((err) => {
    if (err.response.data.message) {
     localStorage.removeItem("session");
    }
   });

  showMessage.promise(fetch, {
   loading: "Loading",
   success: "Success Login.",
   error: (err) =>  err?.response.data.message || 'Unknown error'
  });
 };
};

export const getUser = (session) => {
 return async (dispatch) => {
   AuthService.getCurrentUser(session)
   .then(({data}) => {
    dispatch(setUserData(data));
    setAxiosSession(session);
   })
   .catch(() => setAxiosSession(null));
 };
};

export const userLogOut = () => {
 return (dispatch) => {
  setTimeout(() => {
    dispatch(setLogout);
    showMessage.success('You have successfully logged out.');
  }, 300);
  setAxiosSession(null);
 };
};

export const userRegister = (data) => {
 return (dispatch) => {
  const fetch = AuthService.getReg({
   email: data.email,
   password: data.pass,
  });
  fetch.then(({status}) => {
   if (status === 200) {
    dispatch(setRegStatus(true));
   }
  });

  showMessage.promise(fetch, {
   loading: "Loading",
   success: "Registration Success.",
   error: (err) =>  err?.response.data.message || 'Unknown error'
  });
 };
};
