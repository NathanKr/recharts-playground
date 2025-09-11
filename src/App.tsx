import { Line, LineChart } from "recharts";

const raw = [1,2,3,4,5,6,7,8,9,10];
const data = raw.map((value, index) => ({ x: index , y: value }));

function App() {
  return (
    <>
      <LineChart width={600} height={300} data={data}>
        <Line dataKey="y" />
      </LineChart>
    </>
  );
}

export default App;
