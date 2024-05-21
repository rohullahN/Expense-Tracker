import { useQuery } from "@apollo/client";
import Card from "./Card";
import { GET_TRANSACTIONS } from "../graphql/queries/transaction.query.js";

const Cards = () => {
  const { data, loading } = useQuery(GET_TRANSACTIONS);

  return (
    <div className="w-full px-10 min-h-[40vh]">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-start ">
        {!loading &&
          data.transactions.map((transaction) => (
            <Card key={transaction._id} transaction={transaction} />
          ))}
      </div>
      {!loading && data?.transactions.length === 0 && (
        <p className="text-2xl front-bold text-center w-full">
          No transaction history found
        </p>
      )}
    </div>
  );
};
export default Cards;
