import { FaLocationDot } from "react-icons/fa6";
import { BsCardText } from "react-icons/bs";
import { MdOutlinePayments } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatData";
import { useMutation } from "@apollo/client";
import { DELETE_TRANSACTION } from "../graphql/mutations/transaction.mutation";
import toast from "react-hot-toast";
import { useContext } from "react";
import { UpdateTransactionContext } from "../contexts/UpdateTransactionContext";

const categoryColorMap = {
  saving: "bg-saving",
  expense: "bg-expense",
  investment: "bg-investment",
};

const Card = ({ transaction }) => {
  let { category, amount, location, date, paymentType, description } =
    transaction;
  const cardClass = categoryColorMap[category];

  description = description[0]?.toUpperCase() + description.slice(1);
  category = category[0]?.toUpperCase() + category.slice(1);
  paymentType = paymentType[0]?.toUpperCase() + paymentType.slice(1);
  const formattedDate = formatDate(date);

  const [deleteTransaction] = useMutation(DELETE_TRANSACTION, {
    refetchQueries: ["GetTransactions"],
  });

  const handleDelete = async () => {
    try {
      await deleteTransaction({
        variables: { transactionId: transaction._id },
      });
    } catch (error) {
      console.error("Error deleting transaction: ", error);
      toast.error(error.message);
    }
  };

  const { toggleShowModal } = useContext(UpdateTransactionContext);
  const handleUpdate = () => {
    toggleShowModal();
  };

  return (
    <div className={`rounded-md p-4 ${cardClass}`}>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">{category}</h2>
          <div className="flex items-center gap-2">
            <FaTrash className={"cursor-pointer"} onClick={handleDelete} />
            {/* <Link to={`/transaction/${transaction._id}`}> */}
            <HiPencilAlt
              className="cursor-pointer"
              size={20}
              onClick={handleUpdate}
            />
            {/* </Link> */}
          </div>
        </div>
        <p className="text-slate-900 flex items-center gap-1">
          <BsCardText />
          Description: {description}
        </p>
        <p className="text-slate-900 flex items-center gap-1">
          <MdOutlinePayments />
          Payment Type: {paymentType}
        </p>
        <p className="text-slate-900 flex items-center gap-1">
          <FaSackDollar />
          Amount: ${amount}
        </p>
        <p className="text-slate-900 flex items-center gap-1">
          <FaLocationDot />
          Location: {location || "N/A"}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-xs text-black font-bold">{formattedDate}</p>
          <img
            src={"https://tecdn.b-cdn.net/img/new/avatars/2.webp"}
            className="h-8 w-8 border rounded-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Card;
