import axios from "axios";
import AuthService from "@/api/AuthService";
import msgHandler from "react-hot-toast";

const SET_USER_TK = "@@training-app/dash-reducer/SET_USER_TK";
const SET_USER_DATA = "@@training-app/dash-reducer/SET_USER_DATA";
const SET_REG_STATUS = "@@training-app/dash-reducer/SET_REG_STATUS";
const REG_ERROR = "@@training-app/dash-reducer/REG_ERROR";
const LOG_ERROR = "@@training-app/dash-reducer/LOG_ERROR";
export const setUserToken = (token) => ({ type: SET_USER_TK, token });
export const setUserData = (data, isAuth) => ({ type: SET_USER_DATA, data, isAuth });
export const setRegStatus = (status) => ({ type: SET_REG_STATUS, status });
export const setRegError = (message) => ({ type: REG_ERROR, message });
export const setLogError = (message) => ({ type: LOG_ERROR, message });

let initialState = {
 isAuth: false,
 userToken: null,
 authErr: null,
 authUser: {
  id: null,
  username: null,
  email: null,
 },
 regSuccess: false,
 regErr: null,
};

export default function authReducer(state = initialState, action) {
 switch (action.type) {
  case SET_USER_TK:
   return {
    ...state,
    authErr: null,
    userToken: action.token,
   };
  case SET_USER_DATA:
   return {
    ...state,
    authErr: null,
    isAuth: action.isAuth,
    authUser: action.data,
   };
  case SET_REG_STATUS:
   return {
    ...state,
    regSuccess: action.status,
   };
  case REG_ERROR:
   return {
    ...state,
    regErr: action.message,
   };
  case LOG_ERROR:
   return {
    ...state,
    authErr: action.message,
   };
  default:
   return state;
 }
}

export const userAuth = (authData) => {
 return async (dispatch) => {
  const fetch = AuthService.getAuth({password: authData.pass, username: authData.email});
  fetch
   .then((authRes) => {
    localStorage.setItem("session", `Bearer ${authRes.data}`);
    dispatch(getUser(`Bearer ${authRes.data}`));
   })
   .catch((err) => {
    if (err.response.data.message) {
     localStorage.removeItem("session");
    }
   });

   msgHandler.promise(fetch, {
   loading: "Loading",
   success: "Success Login.",
   error: (err) => {
    return err?.response.data.message;
   },
  });
 };
};

export const getUser = (token) => {
 return async (dispatch) => {
  try {
   const authUser = await AuthService.getCurrentUser(token);
   dispatch(setUserData(authUser.data, true));

   dispatch(setUserToken(token));
   axios.defaults.headers.post["Authorization"] = token;
   axios.defaults.headers.common["Authorization"] = token;
  } catch (error) {
   axios.defaults.headers.post["Authorization"] = null;
   axios.defaults.headers.common["Authorization"] = null;
   localStorage.removeItem("session");
  }
 };
};

export const userLogOut = () => {
 return (dispatch) => {
  dispatch(setUserData(null, false));
  dispatch(setUserToken(null));
  localStorage.removeItem("session");
  axios.defaults.headers.post["Authorization"] = "";
  axios.defaults.headers.common["Authorization"] = "";
 };
};

export const userRegister = (data) => {
 return (dispatch) => {
  console.log(data);
  const fetch = AuthService.getReg({
    email: data.email,
    password: data.pass,
   });
  fetch.then((e) => {
   if (e.status === 200) {
    dispatch(setRegStatus(true));
   }
  });

  msgHandler.promise(fetch, {
    loading: "Loading",
    success: "Registration Success.",
    error: (err) => {
     return err?.response.data.message;
    },
   });
 };
};
