import React from "react";
import s from "./s.module.css";

const SecLoader100 = () => {
 return (
  <div className={s.loader_content}>
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
