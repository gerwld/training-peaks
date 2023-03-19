import React from "react";
import withClickOutside from "../../hocs/withClickOutside";
import s from "./s.module.css";

const ModalAuth = withClickOutside(({ isShow, refElement, toggleShow }) => {


 return (
  <div ref={refElement} className={s.content}>
   <div onClick={toggleShow} className={`auth-sect select_line ${isShow ? "select_line-active" : ""}`}>
    Welcome, <span className="text_btn">authObj</span>!
   </div>
   <div className={`${s.modal_window} ${isShow ? s.modal_visible : ""} modal_l03`}>
    <ul>
     <li><span>1</span></li>
     <li><span>2</span></li>
    </ul>
   </div>
  </div>
 );
});

export default ModalAuth;
