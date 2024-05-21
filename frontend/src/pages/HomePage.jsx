import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import Cards from "../components/Cards.jsx";
// import TransactionForm from "../components/TransactionForm";
import TransactionFormModal from "../components/ui/TransactionFormModal.jsx";
import { useRef } from "react";

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
  const modal = useRef();

  function handleAddClick(e) {
    e.preventDefault();
    modal.current.showModal();
  }
  return (
    <>
      <TransactionFormModal ref={modal} />
      <div className="flex w-full justify-around max-h-[calc(100vh-4rem)] bg-orange-50">
        {/* <TransactionForm /> */}
        <div className="flex flex-col justify-center items-center gap-5 w-1/3 pt-10">
          <Doughnut data={chartData} />
          {/* SUBMIT BUTTON */}
          <button
            className="text-white text-center font-bold w-1/2 rounded px-4 py-2 bg-gradient-to-br
          from-green-600 to-green-600 hover:from-green-600 hover:to-green-700
						disabled:opacity-70 disabled:cursor-not-allowed"
            onClick={handleAddClick}
          >
            Add New Transaction
          </button>
        </div>
        <div className="flex flex-col items-center max-h-full mb-4">
          <p className="text-xl font-bold text-center my-5 text-slate-900">
            Transaction History
          </p>
          <div className="overflow-y-scroll">
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
