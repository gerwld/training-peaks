import React from "react";
import {
	G2,
	Chart,
	Geom,
	Axis,
	Tooltip,
	Coord,
	Label,
	Legend,
	View,
	Guide,
	Shape,
	Facet,
	Util
} from "bizcharts";

class StatisticsChart extends React.Component {
	render() {
		const data = [
			{
				month: "Jan",
				city: "Weight",
				temperature: 7
			},
			{
				month: "Jan",
				city: "Distance",
				temperature: 3.9
			},
			{
				month: "Feb",
				city: "Weight",
				temperature: 6.9
			},
			{
				month: "Feb",
				city: "Distance",
				temperature: 4.2
			},
			{
				month: "Mar",
				city: "Weight",
				temperature: 9.5
			},
			{
				month: "Mar",
				city: "Distance",
				temperature: 5.7
			},
			{
				month: "Apr",
				city: "Weight",
				temperature: 14.5
			},
			{
				month: "Apr",
				city: "Distance",
				temperature: 8.5
			},
			{
				month: "May",
				city: "Weight",
				temperature: 18.4
			},
			{
				month: "May",
				city: "Distance",
				temperature: 11.9
			},
			{
				month: "Jun",
				city: "Weight",
				temperature: 21.5
			},
			{
				month: "Jun",
				city: "Distance",
				temperature: 15.2
			},
			{
				month: "Jul",
				city: "Weight",
				temperature: 25.2
			},
			{
				month: "Jul",
				city: "Distance",
				temperature: 17
			},
			{
				month: "Aug",
				city: "Weight",
				temperature: 26.5
			},
			{
				month: "Aug",
				city: "Distance",
				temperature: 16.6
			},
			{
				month: "Sep",
				city: "Weight",
				temperature: 23.3
			},
			{
				month: "Sep",
				city: "Distance",
				temperature: 14.2
			},
			{
				month: "Oct",
				city: "Weight",
				temperature: 18.3
			},
			{
				month: "Oct",
				city: "Distance",
				temperature: 10.3
			},
			{
				month: "Nov",
				city: "Weight",
				temperature: 13.9
			},
			{
				month: "Nov",
				city: "Distance",
				temperature: 6.6
			},
			{
				month: "Dec",
				city: "Weight",
				temperature: 9.6
			},
			{
				month: "Dec",
				city: "Distance",
				temperature: 4.8
			}
		];
		const cols = {
			month: {
				range: [0, 1]
			}
		};
		return (
			<div className="statschart_wrapper">
			<Chart height={600} data={data} scale={cols} autoFit>
				<Legend marker={{
					symbol: (x, y, radius) => {
						const r = radius / 2;
						return [
							['M', x - radius, y],
							['A', r, r, 0, 0, 1, x, y],
							['A', r, r, 0, 0, 0, x + radius, y],
						]
					},
					style: {
						fill: ""
					}
				}} />
				<Axis name="month" />
				<Axis
					name="temperature"
					label={{
						formatter: val => `${val}°C`
					}}
				/>
				<Tooltip
					domStyles={{
						'g2-tooltip': {
							boxShadow: 'none',
							color: '#fff',
							backgroundColor: '#222'
						}
					}}
					crosshairs={{
						type: "y"
					}}
					style={{
						color: 'red'
					}}
				/>
				<Geom
					type="line"
					position="month*temperature"
					size={2}
					color={"city"}
				/>
				<Geom
					type="point"
					position="month*temperature"
					size={4}
					shape={"circle"}
					color={"city"}
					style={{
						stroke: "#fff",
						lineWidth: 1
					}}
				/>
			</Chart>
			</div>
		);
	}
}


export default StatisticsChart;