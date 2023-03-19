import React from 'react'
import { AiOutlineUser } from "react-icons/ai";

const UserInfo = ({username, avatar}) => {
if(username) return (
    <div className="userinfo">
      <div className="userinfo__avatar">
      {avatar ? 
      <img src={avatar} alt="Avatar" /> 
      : <AiOutlineUser/>}
      </div>
      <span className="userinfo__username">{username}</span>
    </div>
  )
else return " ";
}

export default UserInfo