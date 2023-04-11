import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { MainPage, ReportIssuePage, SettingsPage, PlanPageAll, PlanPageStart } from "./pages";
import { setCreateMode } from "@/redux/actions/app-actions";

import AddTrainPopup from "./components/modals/train/AddTrainPopup/AddTrainPopup";
import EditTrainPopup from "./components/modals/train/EditTrainPopup/EditTrainPopup";
import SetFeelsPopup from "./components/modals/feels/SetFeelsPopup";
import AddPlanPage from "./pages/plans/AddPlanPage/AddPlanPage";
import CreatePlanPopup from "./components/modals/plans/CreatePlanPopup";

const Dashboard = () => {
 const d = useDispatch();
 const { authObj, isCreateMode, isEditMode, selectedDate, isFeelsMode, currentObj, currentFeelsObj, isCreatePlanMode, isPlansInit } = useSelector(({ auth, app, plans }) => ({
  authObj: auth.authObj,
  isPlansInit: plans.isInit,
  isCreateMode: app.isCreateMode,
  isEditMode: app.isEditMode,
  isFeelsMode: app.isFeelsMode,
  selectedDate: app.selectedDate,
  currentObj: app.currentObj,
  currentFeelsObj: app.currentFeelsObj,
  isCreatePlanMode: plans.isCreatePlanMode
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

         <Route path="/select-plan" element={<PlanPageStart />} />
         <Route path="/plans/:PLAN_ID" element={<AddPlanPage isInit={isPlansInit} />} />
         <Route path="/plans/" element={<PlanPageAll />} />
       </Routes>

       {/* POPUPS  */}
       <SetFeelsPopup {...{ isFeelsMode, selectedDate, currentFeelsObj, toggleCreate }} />
       <AddTrainPopup {...{ isCreateMode, toggleCreate, selectedDate }} />
       <EditTrainPopup isEditMode={isEditMode} toggleEdit={toggleEdit} currentObj={currentObj} />
       <CreatePlanPopup isCreatePlanMode={isCreatePlanMode} />
     </div>
   </div>
 )
};

export default Dashboard;
