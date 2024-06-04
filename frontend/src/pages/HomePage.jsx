import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Cards from "../components/Cards.jsx";
import TransactionFormModal from "../components/ui/TransactionFormModal.jsx";
import UpdateTransactionModal from "../components/ui/UpdateTransactionModal.jsx";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_TRANSACTION_STATISTICS } from "../graphql/queries/transaction.query.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const HomePage = () => {
  const { data } = useQuery(GET_TRANSACTION_STATISTICS);
  console.log(data);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "$",
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
        cutout: 0,
      },
    ],
  });

  useEffect(() => {
    if (data?.categoryStatistics) {
      const categories = data.categoryStatistics.map((stat) => stat.category);
      const totalAmounts = data.categoryStatistics.map(
        (stat) => stat.totalAmount
      );

      const backgroundColors = [];
      const borderColors = [];

      categories.forEach((category) => {
        switch (category) {
          case "saving":
            backgroundColors.push("rgba(75, 192, 192)");
            borderColors.push("rgba(75, 192, 192)");
            break;
          case "expense":
            backgroundColors.push("rgba(255, 99, 132)");
            borderColors.push("rgba(255, 99, 132)");
            break;
          case "investment":
            backgroundColors.push("rgba(54, 162, 235)");
            borderColors.push("rgba(54, 162, 235)");
            break;
          default:
            break;
        }
      });

      setChartData((prev) => ({
        labels: categories,
        datasets: [
          {
            ...prev.datasets[0],
            data: totalAmounts,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
          },
        ],
      }));
    }
  }, [data]);
  const createTransactionModal = useRef();
  const updateTransactionModal = useRef();

  function handleAddClick(e) {
    e.preventDefault();
    createTransactionModal.current.showModal();
  }
  return (
    <>
      <TransactionFormModal ref={createTransactionModal} />
      <UpdateTransactionModal ref={updateTransactionModal} />

      <div className="flex w-full justify-around h-[calc(100vh-4rem)] bg-orange-50">
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
            {/* {showModal && (
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
