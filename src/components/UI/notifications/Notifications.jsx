import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delMessage } from "../../../redux/reducers/messages-reducer";
import NotificationPopupItem from "./NotificationPopupItem";
import s from "./s.module.css";

const Notifications = () => {
 const dispatch = useDispatch();
 const { list } = useSelector(({ messages }) => ({
  list: messages.list,
 }));

 const onClose = (id) => {
  dispatch(delMessage(id));
 };

 React.useEffect(() => {
  let timeoutExp = null;
  if (list.length) {
   timeoutExp = setTimeout(() => {
    dispatch(delMessage(list[0].id));
   }, 5000);

   return () => clearTimeout(timeoutExp);
  }
 }, [list]);

 return (
  <div className={s.notification_list}>
   {list.map((message) => (
    <NotificationPopupItem key={message.id} {...message} onClose={onClose} />
   ))}
  </div>
 );
};

export default Notifications;
