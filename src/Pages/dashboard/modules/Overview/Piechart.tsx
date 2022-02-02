// import React from "react";
// import { PieChart, Pie, Legend, Tooltip } from "recharts";

// const data01 = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
//   { name: "Group E", value: 278 },
//   { name: "Group F", value: 189 },
// ];

// const data02 = [
//   { name: "Group A", value: 2400 },
//   { name: "Group B", value: 4567 },
//   { name: "Group C", value: 1398 },
//   { name: "Group D", value: 9800 },
//   { name: "Group E", value: 3908 },
//   { name: "Group F", value: 4800 },
// ];

// export default function DisbursedLoan() {
//   return (
//     <PieChart width={150} height={100}>
//       <Pie
//         dataKey="value"
//         data={data01}
//         cx={80}
//         cy={50}
//         outerRadius={50}
//         fill="#8884d8"
//       />
//       {/* <Pie
//         dataKey="value"
//         isAnimationActive={true}
//         data={data02}
//         cx={500}
//         cy={200}
//         innerRadius={40}
//         outerRadius={80}
//         fill="#82ca9d"
//       /> */}
//       <Tooltip />
//       {/* <Legend /> */}
//     </PieChart>
//   );
// }

// import "./styles.css";
// import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Active", value: 40005000 },
  { name: "Re-paid", value: 3002000 },
  { name: "Non-performing", value: 12400000 },
];
// "#FF8042"
const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
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
const DisbursedLoan = () => {
  return (
    <PieChart width={125} height={125}>
      <Pie
        data={data}
        cx={70}
        cy={65}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={50}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};
export default DisbursedLoan;
