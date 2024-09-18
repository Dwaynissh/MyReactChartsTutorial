import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import lodash from "lodash";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["First Term", "Second Term", "Third Term"];

const numb = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const value = (max: number, min: number) => {
  return Array.from({ length: 7 }, () => {
    return numb(max, min);
  });
};

const paidValue = ["paid", "not-paid"];
const gend = ["Male", "Female"];
const term = ["First Term", "Second Term", "Third Term"];

const session = () => {
  return Array.from({ length: 100 }, () => {
    return {
      status: paidValue[Math.ceil(Math.random() * paidValue.length - 1)],
      performance: `${numb(100, 10)}`,
      attendance: `${numb(100, 10)}`,
      gender: gend[Math.ceil(Math.random() * gend.length - 1)],
      term: gend[Math.ceil(Math.random() * term.length - 1)],
      fee: `${numb(2000, 10000)}`,
    };
  });
};
const sessionII = () => {
  return Array.from({ length: 100 }, () => {
    return {
      status: paidValue[Math.ceil(Math.random() * paidValue.length - 1)],
      performance: `${numb(100, 10)}`,
      attendance: `${numb(100, 10)}`,
      gender: gend[Math.ceil(Math.random() * gend.length - 1)],
      term: gend[Math.ceil(Math.random() * term.length - 1)],
      fee: `${numb(2000, 10000)}`,
    };
  });
};
const sessionIII = () => {
  return Array.from({ length: 100 }, () => {
    return {
      status: paidValue[Math.ceil(Math.random() * paidValue.length - 1)],
      performance: `${numb(100, 10)}`,
      attendance: `${numb(100, 10)}`,
      gender: gend[Math.ceil(Math.random() * gend.length - 1)],
      term: gend[Math.ceil(Math.random() * term.length - 1)],
      fee: `${numb(2000, 10000)}`,
    };
  });
};

// console.log("Reading value: ", value);

// console.log(
//   "grouping",
//   Object.values(lodash.groupBy(session(), "term"))[0].length
// );
// console.log("Reading session", session());
// console.log("Reading session", sessionII());
// console.log("Reading session", sessionIII());

export const data = {
  labels,
  datasets: [
    {
      label: "First Term",
      data: [
        Object.values(lodash.groupBy(session(), "term"))[0].length,
        Object.values(lodash.groupBy(session(), "term"))[0].length,
        Object.values(lodash.groupBy(session(), "term"))[0].length,
      ],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Second Term",
      data: [
        Object.values(lodash.groupBy(session(), "term"))[1].length,
        Object.values(lodash.groupBy(session(), "term"))[1].length,
        Object.values(lodash.groupBy(session(), "term"))[1].length,
      ],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Third Term",
      data: [
        Object.values(lodash.groupBy(session(), "term"))[2].length,
        Object.values(lodash.groupBy(session(), "term"))[2].length,
        Object.values(lodash.groupBy(session(), "term"))[2].length,
      ],
      backgroundColor: "rgba(129, 235, 53, 0.5)",
    },
  ],
};
export const genderData = {
  labels,
  datasets: [
    {
      label: "Male Gender",
      data: [
        Object.values(lodash.groupBy(session(), "gender"))[0].length,
        Object.values(lodash.groupBy(session(), "gender"))[0].length,
        Object.values(lodash.groupBy(session(), "gender"))[0].length,
      ],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Female Gender",
      data: [
        Object.values(lodash.groupBy(session(), "gender"))[1].length,
        Object.values(lodash.groupBy(session(), "gender"))[1].length,
        Object.values(lodash.groupBy(session(), "gender"))[1].length,
      ],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const BarChart = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="w-[70%] flex justify-center items-center gap-[50px] flex-col">
        <div className="w-full">
          <p className="Text-[30px] font-bold">Barchart</p>
          <div className="w-full">
            <Bar options={options} data={data} />;
          </div>
        </div>
        <div className="w-full">
          <p className="Text-[30px] font-bold">Barchart For Gender</p>
          <div className="w-full">
            <Bar options={options} data={genderData} />;
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
