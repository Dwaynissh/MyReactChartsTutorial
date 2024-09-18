import BarChart from "./BarChart";
import TimeTable from "./TimeTable";

const HomeScreen = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <BarChart />
      <TimeTable />
    </div>
  );
};

export default HomeScreen;
