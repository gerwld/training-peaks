import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";


import { userLogOut } from "redux";
import { withClickOutside } from "hocs";
import { AiOutlineUser } from "react-icons/ai";
import { RiCoinsLine } from 'react-icons/ri';
import s from "./s.module.css";


const ModalAuth = withClickOutside(({ isShow, refElement, toggleShow, email, coinBalance }) => {
 const d = useDispatch();
 const onLogout = () => {
  d(userLogOut());
 };

 return (
  <div ref={refElement} className={s.content}>
   <button onClick={toggleShow} className={`auth-sect select_line ${isShow ? "select_line-active" : ""}`}>
    <AiOutlineUser />
    <span className="text_btn">{email ? email?.slice(0, 15) : 'Settings'}</span>
   </button>

   <div className={`${s.modal_window} ${isShow ? s.modal_visible : ""} modal_l03`}>
    <nav onClick={toggleShow}>
      {!isNaN(coinBalance) ? <span className="coin_balance"><RiCoinsLine/> Coin balance: <i>{coinBalance}</i></span> : ''}
      <NavLink to="/select-plan">Plans</NavLink>
      <NavLink to="/statistics">Statistics</NavLink>
      <NavLink to="/settings">Settings</NavLink>
      <button onClick={onLogout} >Log Out</button>
    </nav>
    
   </div>
  </div>
 );
});

export default ModalAuth;
