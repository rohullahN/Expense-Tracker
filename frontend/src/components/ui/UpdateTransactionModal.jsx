import { forwardRef, useContext, useEffect } from "react";
import { UpdateTransactionContext } from "../../contexts/UpdateTransactionContext";
const UpdateTransactionModal = forwardRef(function TransactionFormModal(
  _,
  ref
) {
  const { showModal, toggleShowModal } = useContext(UpdateTransactionContext);

  useEffect(() => {
    showModal ? ref.current.showModal() : ref.current.close();
  }, [ref, showModal]);

  const handleCancelClick = () => {
    ref.current.close();
    toggleShowModal();
  };

  return (
    <dialog ref={ref} className="bg-orange-50">
      <h1 className="w-full text-center font-bold uppercase tracking-wide py-5 text-white bg-slate-900">
        Update Transaction
      </h1>
      <form
        className=" max-w-lg flex flex-col gap-5 px-3 mx-10 my-10 "
        // onSubmit={handleSubmit}
        method="dialog"
      >
        {/* TRANSACTION */}
        <div className="flex flex-wrap">
          <div className="w-full">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="description"
            >
              Transaction
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="description"
              name="description"
              type="text"
              required
              placeholder="Rent, Groceries, Salary, etc."
            />
          </div>
        </div>
        {/* PAYMENT TYPE */}
        <div className="flex flex-wrap gap-3">
          <div className="w-full flex-1 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide  text-xs font-bold mb-2"
              htmlFor="paymentType"
            >
              Payment Type
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="paymentType"
                name="paymentType"
              >
                <option value={"card"}>Card</option>
                <option value={"cash"}>Cash</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* CATEGORY */}
          <div className="w-full flex-1 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide  text-xs font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="category"
                name="category"
              >
                <option value={"saving"}>Saving</option>
                <option value={"expense"}>Expense</option>
                <option value={"investment"}>Investment</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* AMOUNT */}
          <div className="w-full flex-1 mb-6 md:mb-0">
            <label
              className="block uppercase  text-xs font-bold mb-2"
              htmlFor="amount"
            >
              Amount($)
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="amount"
              name="amount"
              type="number"
              placeholder="150"
            />
          </div>
        </div>

        {/* LOCATION */}
        <div className="flex flex-wrap gap-3">
          <div className="w-full flex-1 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide  text-xs font-bold mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="location"
              name="location"
              type="text"
              placeholder="New York"
            />
          </div>

          {/* DATE */}
          <div className="w-full flex-1">
            <label
              className="block uppercase tracking-wide  text-xs font-bold mb-2"
              htmlFor="date"
            >
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-[11px] px-4 mb-3 leading-tight focus:outline-none
						 focus:bg-white"
              placeholder="Select date"
            />
          </div>
        </div>
        <div className="flex justify-between w-full">
          {/* CANCEL BUTTON */}
          <button
            className="text-white font-bold w-fit rounded px-4 py-2 bg-gradient-to-br
          from-red-700 to-red-700 hover:from-red-800 hover:to-red-800
						disabled:opacity-70 disabled:cursor-not-allowed "
            onClick={handleCancelClick}
          >
            Cancel
          </button>
          {/* SUBMIT BUTTON */}
          <button
            className="text-white font-bold w-fit rounded px-4 py-2 bg-gradient-to-br
          from-green-700 to-green-700 hover:from-green-800 hover:to-green-800
						disabled:opacity-70 disabled:cursor-not-allowed"
            type="submit"
          >
            {/* {loading ? "Saving..." : "Add Transaction"}
             */}
            Update Transaction
          </button>
        </div>
      </form>
    </dialog>
  );
});

export default UpdateTransactionModal;
