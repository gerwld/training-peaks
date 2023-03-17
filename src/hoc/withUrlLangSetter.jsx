import React from "react"
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

const langLok = ["en","uk","be","pl","ka","tr","de"];

// ** SETS CURRENT LANGUAGE FROM URL QUERY ** //
const withUrlLangSetter = (WrappedComponent) => {
 return props => {
  let [searchParams] = useSearchParams();
  let {i18n} = useTranslation();
  let lang = localStorage.getItem("i18nextLng");
  if(langLok.indexOf(lang) === -1) lang = 'en';

  const hocIsCurrent = (locale) => locale === lang ? "active_lang" : "";
 
  //set lang when lang param changes
  React.useEffect(() => {
   let pLang = searchParams.get("setLn"), 
       isLocale = langLok.indexOf(pLang) !== -1;
   if (pLang && lang !== pLang && isLocale) {
    i18n.changeLanguage(pLang);
    document.body.style.opacity = "0";
    window.location.reload(false);
   }
  }, [searchParams.get("setLn")]);

  return <WrappedComponent {...props} hocIsCurrent={hocIsCurrent} hocLang={lang} />
 }
}


export default withUrlLangSetter;