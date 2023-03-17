import React from "react";
import { Route, Routes } from "react-router-dom";
import { SecLoader100, Navbar} from "./components";
import { MainPage, ReportIssuePage, SettingsPage } from "./pages";

const Dashboard = () => {
 return (
  <div className="app_main">
   <Navbar />
   <div className="app_section">
    <div className="app_content">
     <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="settings" element={<SettingsPage />} />
      <Route path="popup" element={<NotificationPopupList />} />
      <Route path="/report-issue" element={<ReportIssuePage />} />
      <Route path="/online-tracker" element={<SecLoader100 />} />
     </Routes>
    </div>
   </div>
  </div>
 );
};

export default Dashboard;
