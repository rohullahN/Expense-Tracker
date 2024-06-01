import { createContext, useState } from "react";

const UpdateTransactionContext = createContext();

function UpdateTransactionProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [transactionId, setTransactionId] = useState(null);

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <UpdateTransactionContext.Provider
      value={{ showModal, toggleShowModal, setTransactionId, transactionId }}
    >
      {children}
    </UpdateTransactionContext.Provider>
  );
}

export { UpdateTransactionContext, UpdateTransactionProvider };
