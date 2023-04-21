import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import DateRangePicker from 'rsuite/DateRangePicker';
import StatisticsChart from "./StatisticsChart";
import { fetchStatisticsGlobal } from "@/redux/actions/statistics";
import { SecLoader100 } from "@/components";

import { AiOutlineDeploymentUnit } from "react-icons/ai";
import {TbHandFinger} from 'react-icons/tb';
import "styles/picker.css";




const StatisticsPage = () => {
  const dispatch = useDispatch();
  const {isInit, currentRange, statsData, totalDistance, avgWeight} = useSelector(({statistics}) => ({
    isInit: statistics.isInit,
    currentRange: statistics.currentRange,
    statsData: statistics.statsData,
    totalDistance: statistics.totalDistance,
    avgWeight: statistics.avgWeight
  }))

  const fetchStatistics = (range) => {
    if(range?.length) {
      let payload = range?.map(e => new Date(e) - (new Date(e) % 86400000)).sort((a, b) => a - b)
       dispatch({
         type: 'SET_STATS_RANGE',  payload});
       dispatch(fetchStatisticsGlobal(...payload))
     } 
  }

  const onRangeSet = (range) => {
    fetchStatistics(range);
    if(!range?.length) {
      dispatch({
        type: 'SET_STATS_RANGE',  payload: null});
    }
  }

  useLayoutEffect(() => {
    fetchStatistics(currentRange);
  }, [])


 return (
  <div className="page_content page_content__100 statistics_page">
   <div className="page-content dashboard_wrapper">
    <h1 className="page_title">Statistics</h1>

    <DateRangePicker onChange={onRangeSet} value={currentRange?.map(e => new Date(e))} placeholder="Select Date Range" />

  {/* if rangepicker not empty */}
  { currentRange?.length ? 

    // show no data or chart 
    <>
    {statsData?.length ? 
    <StatisticsChart {...{statsData, totalDistance, avgWeight}}/>  
    : <div className="select_range_msg">
        <span> <AiOutlineDeploymentUnit/>No data in selected range.</span>
      </div>}
    </>

    // else show init message
      : <div className="select_range_msg">
        <span> <TbHandFinger/>Select Date to begin</span>
      </div>
    }


    <SecLoader100 isVisible={!isInit}/>

   </div>
  </div>
 );
};

export default StatisticsPage;
