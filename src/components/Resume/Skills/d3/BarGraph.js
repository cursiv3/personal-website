import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  ResponsiveContainer
} from "recharts";
import "../skills.css";

const DATA = require("./logoList");

class LogoDisplay extends React.Component {
  render() {
    const { x, y, value, width, height } = this.props;
    return (
      <image
        style={{
          width: `${height}px`,
          height: `${height}px`
        }}
        fill="white"
        href={value}
        x={x + width}
        y={y}
      />
    );
  }
}

class BarGraph extends React.Component {
  render() {
    return (
      <div className="barChartWrap">
        <ResponsiveContainer width={"100%"} height={550}>
          <BarChart
            data={DATA}
            margin={{ top: 5, bottom: -20 }}
            layout="vertical"
          >
            <YAxis type="category" dataKey="name" width={1} />
            <XAxis
              type="number"
              domain={[0, 20]}
              ticks={[""]}
              tickLine={false}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip
              labelStyle={{ color: "black" }}
              itemStyle={{ color: "black" }}
            />
            <Bar dataKey="level" fill="red" animationDuration={1700}>
              <LabelList
                dataKey="url"
                content={<LogoDisplay />}
                position="insideTopRight"
              />
              <LabelList
                dataKey="name"
                fill="white"
                fontSize="22"
                style={{ fontWeight: "bold" }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="axisLabelLeft">Beginner</p>
        <p className="axisLabelRight">Expert</p>
      </div>
    );
  }
}

export default BarGraph;
