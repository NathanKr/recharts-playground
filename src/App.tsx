import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import './App.css'

const raw = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const data = raw.map((value, index) => ({ x: index, y: value }));

function App() {
  return (
    <>
      <h2>Most simple line chart</h2>
      <LineChart width={600} height={300} data={data}>
        <Line dataKey="y" />
      </LineChart>
      {/* ad x,y axis and grid */}
      <h2>Better line chart</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" /> {/* optional grid lines */}
        {/* <XAxis dataKey="x" /> */}
        <XAxis
          dataKey="x"
          label={{ value: "X Axis", position: "insideBottom", offset: -5 }}
        />
        <YAxis
          label={{ value: "Y Axis", angle: -90, position: "insideLeft" }}
        />
        <Tooltip />
        <Legend />
        <Line dataKey="y" />
      </LineChart>
    </>
  );
}

export default App;
