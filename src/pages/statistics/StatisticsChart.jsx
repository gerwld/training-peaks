import React from "react";
import { Chart, LineAdvance } from "bizcharts";

const scale = {
 month: {
  formatter: (time) => new Date(time * 86400000).getMonth() + 1 + "/" + new Date(time * 86400000).getDate(),
 },
};

const StatisticsChart = ({ statsData, totalDistance, avgWeight }) => {
 return (
  <div className="statschart_wrapper">

{(!isNaN(totalDistance) || !isNaN(avgWeight)) ?
  <div className="stats_totalsblock">
    <span className="totals_header">In selected range:</span>
    <ul className="statschart_totals">
      {!isNaN(totalDistance) ? <li><span className="totals_metric">Total distance:</span>{totalDistance}km</li>        : ''}
      {!isNaN(avgWeight) ?     <li><span className="totals_metric">Average weight:</span>{avgWeight.toFixed(2)}kg</li> : ''}
    </ul>
  </div>
  : ''}


   <Chart padding={[10, 20, 50, 40]} scale={scale} autoFit height={650} data={statsData}>
    <LineAdvance shape="smooth" point area position="month*metric" color="city" />
   </Chart>
  </div>
 );
}

export default StatisticsChart;
