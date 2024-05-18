import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import Cards from "../components/Cards";
import TransactionForm from "../components/TransactionForm";

ChartJS.register(ArcElement, Tooltip, Legend);

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-6 items-center max-w-7xl mx-auto z-20 relative justify-center">
        <div className="flex items-center"></div>
        <div className="flex flex-wrap w-full justify-center items-center gap-6 max-h-full">
          <TransactionForm />
          <div className="max-h-[95vh] overflow-y-auto">
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
