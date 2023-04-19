import React from "react";
import DateRangePicker from 'rsuite/DateRangePicker';

import "styles/picker.css";
import StatisticsChart from "./StatisticsChart";


const StatisticsPage = () => {

 return (
  <div className="page_content page_content__100 statistics_page">
   <div className="page-content dashboard_wrapper">
    <h1 className="page_title">Statistics</h1>

    <DateRangePicker placeholder="Select Date Range" />


    <StatisticsChart/>
   </div>
  </div>
 );
};

export default StatisticsPage;
