import React from "react";
import { MdClose, MdInfoOutline } from "react-icons/md";
import s from "./s.module.css";

const NotificationPopupItem = ({ isError = true, message = "Unknown Error.", onClose, id }) => {
 const onCloseCallback = () => {
  onClose(id);
 };

 return (
  <div className={`${s.notification_item} ${isError && s.notification_item__error}`}>
   <MdInfoOutline />
   <span className={s.notification_message}>{message}</span>
   <button onClick={onCloseCallback} on className={s.notification_closebtn} type="button" title="Close">
    <span>Close</span>
    <MdClose />
   </button>
  </div>
 );
};

export default NotificationPopupItem;
