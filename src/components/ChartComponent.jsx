import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "00:00", online: 20, story: 0 },
  { time: "01:00", online: 30, story: 20 },
  { time: "02:00", online: 40, story: 40 },
  { time: "03:00", online: 50, story: 35 },
  { time: "04:00", online: 70, story: 50 },
  { time: "05:00", online: 120, story: 60 },
  { time: "06:00", online: 110, story: 55 },
];

function ChartComponent() {
  return (
    <div className="chart-box">
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="online" stroke="#007bff" name="Online Customer" />
          <Line type="monotone" dataKey="story" stroke="#28a745" name="Story Customer" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartComponent;