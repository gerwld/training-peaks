import React from "react";
import { Chart, LineAdvance } from "bizcharts";

const scale = {
 month: {
  formatter: (time) => new Date(time * 86400000).getMonth() + 1 + "/" + new Date(time * 86400000).getDate(),
 },
};

function StatisticsChart({ statsData }) {
 return (
  <div className="statschart_wrapper">
   <Chart padding={[10, 20, 50, 40]} scale={scale} autoFit height={600} data={statsData}>
    <LineAdvance shape="smooth" point area position="month*metric" color="city" />
   </Chart>
  </div>
 );
}

export default StatisticsChart;
