const SET_THEME = "@@trainig-app/apr_reducer/SET_THEME";
export const onSetTheme = (themeID) => ({ type: SET_THEME, payload: themeID });

let initialState = {

};

export default function aprReducer(state = initialState, action) {
 switch (action.type) {
  default:
   return state;
 }
}
