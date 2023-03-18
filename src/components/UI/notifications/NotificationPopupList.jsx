import React from "react";
import NotificationPopupItem from "./NotificationPopupItem";
import s from "./s.module.css";

const NotificationPopupList = () => {
 const [messages, setMessages] = React.useState([]);

 const onClose = (index) => {
  let mess = messages.filter((_, i) => i !== index);
  setMessages(mess);
 };

 return (
  <div className={s.notification_list}>
   <div>
    <button
     onClick={() => {
      setMessages((prevMessages) => prevMessages.concat([`Message #${prevMessages.length + 1}`]));
      setTimeout(() => {
       setMessages((prevMessages) => prevMessages.slice(1));
      }, 6000);
     }}
    >
     Add a message
    </button>
    <div>
     {messages.map((message, index) => (
      <NotificationPopupItem key={index + "_msg"} isError={false} message={message} onClose={onClose} index={index} />
     ))}
    </div>
   </div>
  </div>
 );
};

export default NotificationPopupList;
