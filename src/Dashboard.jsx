import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { SecLoader100, Navbar} from "./components";
import { MainPage, ReportIssuePage, SettingsPage, PlanPage } from "./pages";
import AddTrain from "./components/modals/addTrain/AddTrain";

const Dashboard = () => {
  const {authObj} = useSelector(({auth}) => ({
    authObj: auth.authObj
  }))
 return (
  <div className="app_main">
   <Navbar authName={authObj.email} />
    <div className="app_content">
     <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="settings" element={<SettingsPage />} />

      <Route path="/report-issue" element={<ReportIssuePage />} />
      <Route path="/online-tracker" element={<SecLoader100 />} />
      <Route path="/select-plan" element={<PlanPage />} />
      <Route path="/add-training" element={<AddTrain />} />

     </Routes>
    </div>
  </div>
 );
};

export default Dashboard;
