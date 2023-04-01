import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { SecLoader100, Navbar} from "./components";
import { MainPage, ReportIssuePage, SettingsPage, PlanPage } from "./pages";
import AddTrain from "./components/modals/addTrainPopup/AddTrainPopup";
import AddTrainPopup from "./components/modals/addTrainPopup/AddTrainPopup";
import { setCreateMode } from "./redux/reducers/app-reducer";

const Dashboard = () => {
  const d = useDispatch();
  const {authObj, isCreateMode} = useSelector(({auth, app}) => ({
    authObj: auth.authObj,
    isCreateMode: app.isCreateMode
  }))
  const toggleCreate = () => {
    d(setCreateMode(!isCreateMode));
  }
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

     {/* POPUPS  */}
     <AddTrainPopup isCreateMode={isCreateMode} toggleCreate={toggleCreate}/>
    </div>
  </div>
 );
};

export default Dashboard;
