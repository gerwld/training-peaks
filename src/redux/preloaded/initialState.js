const currentThemeFromStorage = localStorage.getItem("currentTheme") || window.matchMedia("(prefers-color-scheme: dark)").matches && "dark" || "light";
const currentLangFromStorage = localStorage.getItem("i18nextLng") || "en";

const initialState = {
 app: {
  currentTheme: currentThemeFromStorage,
  currentLang: currentLangFromStorage
 },
};

export default initialState;