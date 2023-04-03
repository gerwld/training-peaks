import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { SecLoader100, Navbar } from "./components";
import { MainPage, ReportIssuePage, SettingsPage, PlanPage } from "./pages";
import { setCreateMode } from "@/redux/actions/app-actions";

import AddTrainPopup from "./components/modals/AddTrainPopup/AddTrainPopup";
import EditTrainPopup from "./components/modals/EditTrainPopup/EditTrainPopup";
import SetFeelsPopup from "./components/modals/SetFeelsPopup/SetFeelsPopup";

const Dashboard = () => {
 const d = useDispatch();
 const { authObj, isCreateMode, isEditMode, selectedDate, isFeelsMode, currentObj, currentFeelsObj } = useSelector(({ auth, app }) => ({
  authObj: auth.authObj,
  isCreateMode: app.isCreateMode,
  isEditMode: app.isEditMode,
  isFeelsMode: app.isFeelsMode,
  selectedDate: app.selectedDate,
  currentObj: app.currentObj,
  currentFeelsObj: app.currentFeelsObj
 }));
 const toggleCreate = () => {
  d(setCreateMode(!isCreateMode));
 };
 const toggleEdit = () => {
  d({ type: "TOGGLE_EDIT", payload: null });
 };
 return (
   <div className="app_main">
     <Navbar authName={authObj.email} />
     <div className="app_content">
       <Routes>
         <Route path="/*" element={<MainPage />} />
         <Route path="settings" element={<SettingsPage />} />

         <Route path="/report-issue" element={<ReportIssuePage />} />
         <Route path="/online-tracker" element={<SecLoader100 />} />
         <Route path="/select-plan" element={<PlanPage />} />
       </Routes>

       {/* POPUPS  */}
       <AddTrainPopup {...{ isCreateMode, toggleCreate, selectedDate }} />
       <SetFeelsPopup {...{ isFeelsMode, selectedDate, currentFeelsObj, toggleCreate }} />
       <EditTrainPopup isEditMode={isEditMode} toggleEdit={toggleEdit} currentObj={currentObj} />
     </div>
   </div>
 )
};

export default Dashboard;
