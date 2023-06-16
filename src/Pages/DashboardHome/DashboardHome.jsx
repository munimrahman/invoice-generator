/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    sale: 250,
  },
  {
    name: "Feb",
    sale: 364,
  },
  {
    name: "Mar",
    sale: 390,
  },
  {
    name: "Apr",
    sale: 127,
  },
  {
    name: "May",
    sale: 320,
  },
  {
    name: "June",
    sale: 240,
  },
];

const dataP = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const DashboardHome = () => {
  return (
    <div className="px-8 py-3 bg-[#F1F5F9] min-h-screen">
      <div className="flex items-center justify-between pb-2">
        <h2 className="text-3xl underline">Dashboard</h2>
      </div>

      <div>
        {/* stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-2">
          <div className="border bg-white px-2 py-4 rounded-md text-center shadow">
            <p className="text-gray-400">Total Sales</p>
            <p className="text-primary text-3xl my-2">$2500</p>
            <p className="flex justify-center items-center text-green-800 text-sm">
              <i className="fas fa-long-arrow-alt-up text-xs me-1"></i>
              <span>25%</span>
            </p>
            <p className="text-gray-400 text-sm">Compared to April 2021</p>
          </div>

          <div className="border bg-white px-2 py-4 rounded-md text-center shadow">
            <p className="text-gray-400">Total Order</p>
            <p className="text-primary text-3xl my-2">45</p>
            <p className="flex justify-center items-center text-green-800 text-sm">
              <i className="fas fa-long-arrow-alt-up text-xs me-1"></i>
              <span>25%</span>
            </p>
            <p className="text-gray-400 text-sm">Compared to April 2021</p>
          </div>

          <div className="border bg-white px-2 py-4 rounded-md text-center shadow">
            <p className="text-gray-400">Average Order Value</p>
            <p className="text-primary text-3xl my-2">$48</p>
            <p className="flex justify-center items-center text-red-800 text-sm">
              <i className="fas fa-arrow-down text-xs me-1"></i>
              <span>25%</span>
            </p>
            <p className="text-gray-400 text-sm">Compared to April 2021</p>
          </div>
        </div>
        {/* chart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <div className="bg-white rounded-md border shadow flex flex-col items-center">
            <h2 className="text-center my-2 mb-5 text-lg font-bold">
              Monthly Sales
            </h2>
            <BarChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sale" stackId="a" fill="#8884d8" />
            </BarChart>
          </div>
          {/* pie */}
          <div className="bg-white rounded-md border shadow">
            <h2 className="text-center my-2 text-lg font-bold">
              Product Sales
            </h2>
            <div className="flex flex-col items-center justify-center">
              <div>
                <PieChart width={250} height={250}>
                  <Pie
                    data={dataP}
                    cx={100}
                    cy={100}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </div>
              <div className="flex gap-5 mt-5">
                <ul>
                  <li className="mb-2 flex items-center">
                    <i
                      className={`fas fa-square-full me-1 text-xs text-[#0088FE]`}
                    ></i>
                    Product One
                  </li>
                  <li className="flex items-center">
                    <i
                      className={`fas fa-square-full me-1 text-xs text-[#00C49F]`}
                    ></i>
                    Product One
                  </li>
                </ul>
                <ul>
                  <li className="mb-2 flex items-center">
                    <i
                      className={`fas fa-square-full me-1 text-xs text-[#FF8042]`}
                    ></i>
                    Product One
                  </li>
                  <li className="flex items-center">
                    <i
                      className={`fas fa-square-full me-1 text-xs text-[#FFBB28]`}
                    ></i>
                    Product One
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
