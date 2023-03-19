import React from "react";
import PremiumLeft from "@/components/UI/blocks/PremiumLeft";
import s from "./s.module.css";
import UserInfo from "../../components/UI/blocks/UserInfo";
import { useSelector } from "react-redux";

const SettingsPage = () => {
 const { authObj } = useSelector(({ auth }) => ({
  authObj: auth.authObj,
 }));

 return (
  <div className={`page_content page_content__100 ${s.settings_page}`}>
   <div className="page-content dashboard_wrapper">
    <UserInfo username={authObj.email}/>
    <PremiumLeft username={authObj.email} />
   </div>
  </div>
 );
};

export default SettingsPage;
