import React from "react";
import withClickOutside from "../../hocs/withClickOutside";

import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { userLogOut } from "@/redux/reducers/auth-reducer";

import { AiOutlineUser } from "react-icons/ai";
import s from "./s.module.css";


const ModalAuth = withClickOutside(({ isShow, refElement, toggleShow, authName }) => {
 const d = useDispatch();
 const onLogout = () => {
  d(userLogOut());
 };

 return (
  <div ref={refElement} className={s.content}>
   <button onClick={toggleShow} className={`auth-sect select_line ${isShow ? "select_line-active" : ""}`}>
    <AiOutlineUser />
    <span className="text_btn">{authName.slice(0, 15)}</span>
   </button>
   <div className={`${s.modal_window} ${isShow ? s.modal_visible : ""} modal_l03`}>
    <ul onClick={toggleShow}>
    <li>
      <NavLink to="/settings">Statistics</NavLink>
     </li>
     <li>
      <NavLink to="/settings">Settings</NavLink>
     </li>
    </ul>
    <button onClick={onLogout} >Log Out</button>
   </div>
  </div>
 );
});

export default ModalAuth;
