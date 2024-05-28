import { createContext, useState } from "react";

const UpdateTransactionContext = createContext();

function UpdateTransactionProvider({ children }) {
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <UpdateTransactionContext.Provider value={{ showModal, toggleShowModal }}>
      {children}
    </UpdateTransactionContext.Provider>
  );
}

export { UpdateTransactionContext, UpdateTransactionProvider };
