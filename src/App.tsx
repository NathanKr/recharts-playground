import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./App.css";

// --- assune x and y1 have same length
const x = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1];
const y1 = x.map((value) => value);
const y2 = x.map((value) => value * 2);
const data1 = x.map((value, index) => ({ x: value, y: y1[index] }));

const combinedData = x.map((value, index) => ({
  x: value,
  y1: y1[index],
  y2: y2[index],
}));

function App() {
  return (
    <>
      <h2>Most simple line chart</h2>
      <LineChart width={600} height={300} data={data1}>
        <Line dataKey="y" />
      </LineChart>
      {/* add x,y axis and grid */}
      <h2>Better line chart : axis , labels , tooltip</h2>
      <LineChart width={600} height={300} data={data1}>
        {/* -- dashed lines grid */}
        <CartesianGrid strokeDasharray="3 3" />
        {/* the label is inside the chart at its bottom with offset 5 */}
        <XAxis
          dataKey="x"
          label={{ value: "X Axis", position: "insideBottom", offset: -5 }}
        />
        {/* the label is inside the chart and the left. the text is rotated by 90 degree */}
        <YAxis
          label={{ value: "Y Axis", angle: -90, position: "insideLeft" }}
        />
        {/* show the y value on the chart when hovered */}
        <Tooltip />
        <Line dataKey="y" />
      </LineChart>
      <h2>
        Two graphs on the same chars ,legened ,responsive ,thick lines no dots
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={combinedData}>
          {/* -- dashed lines grid */}
          <CartesianGrid strokeDasharray="3 3" />
          {/* the label is inside the chart at its bottom with offset 5 */}
          <XAxis
            dataKey="x"
            label={{ value: "X Axis", position: "insideBottom", offset: -5 }}
          />
          {/* the label is inside the chart and the left. the text is rotated by 90 degree */}
          <YAxis
            label={{ value: "Y Axis", angle: -90, position: "insideLeft" }}
          />
          {/* show the y value on the chart when hovered */}
          <Tooltip />
          <Legend verticalAlign="top" />
          <Line
            dataKey="y1"
            stroke="green"
            strokeWidth={2}
            name="Line 1"
            dot={false}
          />
          <Line
            dataKey="y2"
            stroke="brown"
            strokeWidth={2}
            name="Line 2"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default App;
