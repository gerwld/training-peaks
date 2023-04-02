import React from "react";
import s from "./s.module.css";

const SecLoader100 = ({isVisible}) => {
 return (
  <div className={`${s.loader_content} ${isVisible ? s.loader_content__visible : ''}`}>
   <div className={s.lds_roller}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
   </div>
  </div>
 );
};

export default SecLoader100;
