import React from "react";
import withClickOutside from "../../hocs/withClickOutside";
import s from "./s.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { userLogOut } from "../../redux/reducers/auth-reducer";
import { useNavigate } from "react-router-dom";

const ModalAuth = withClickOutside(({ isShow, refElement, toggleShow, authName }) => {
 const d = useDispatch();
 const n = useNavigate();
 const onLogout = () => {
  d(userLogOut());
  n('/');
 };

 return (
  <div ref={refElement} className={s.content}>
   <button onClick={toggleShow} className={`auth-sect select_line ${isShow ? "select_line-active" : ""}`}>
    <AiOutlineUser />
    <span className="text_btn">{authName.slice(0, 15)}</span>
   </button>
   <div className={`${s.modal_window} ${isShow ? s.modal_visible : ""} modal_l03`}>
    <ul>
     <li>
      <span>1</span>
     </li>
     <li>
      <span onClick={onLogout}>Log Out</span>
     </li>
    </ul>
   </div>
  </div>
 );
});

export default ModalAuth;
