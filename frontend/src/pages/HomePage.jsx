import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import Cards from "../components/Cards";
// import TransactionForm from "../components/TransactionForm";

const chartData = {
  labels: ["Saving", "Expense", "Investment"],
  datasets: [
    {
      label: "%",
      data: [13, 8, 3],
      backgroundColor: [
        "rgba(75, 192, 192)",
        "rgba(255, 99, 132)",
        "rgba(54, 162, 235)",
      ],
      borderColor: [
        "rgba(75, 192, 192)",
        "rgba(255, 99, 132)",
        "rgba(54, 162, 235, 1)",
      ],
      borderWidth: 1,
      cutout: 0,
    },
  ],
};
ChartJS.register(ArcElement, Tooltip, Legend);

const HomePage = () => {
  return (
    <>
      <div className="flex flex-wrap w-full justify-around max-h-[85vh]">
        {/* <TransactionForm /> */}
        <div className="flex flex-col justify-center items-center gap-5 w-1/3 pt-10">
          <Doughnut data={chartData} />
          {/* SUBMIT BUTTON */}
          <button
            className="text-white text-center font-bold w-1/2 rounded px-4 py-2 bg-gradient-to-br
          from-green-600 to-green-600 hover:from-green-600 hover:to-green-700
						disabled:opacity-70 disabled:cursor-not-allowed"
            type="submit"
            // disabled={loading}
          >
            Add Transaction
          </button>
        </div>
        <div className="overflow-y-auto">
          <Cards />
        </div>
      </div>
    </>
  );
};
export default HomePage;
