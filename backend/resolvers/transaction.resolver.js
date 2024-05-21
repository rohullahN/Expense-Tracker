import Transaction from "../models/transaction.model.js";

const transactionResolver = {
  Query: {
    transactions: async (_, { orderBy }, context) => {
      try {
        if (!context.getUser()) throw new Error("Unauthorized");
        const userId = await context.getUser()._id;

        const transactions = await Transaction.find({ userId });
        if (orderBy) {
          const { field, direction } = orderBy;
          transactions.sort((a, b) => {
            if (direction === "desc") {
              return new Date(b[field]) - new Date(a[field]);
            }
            return new Date(a[field]) - new Date(b[field]);
          });
        }
        return transactions;
      } catch (error) {
        console.error("Error in transactions query: ", error);
        throw new Error(error.message || "Error getting transactions");
      }
    },
    transaction: async (_, { transactionId }) => {
      try {
        const transaction = await Transaction.findById(transactionId);
        return transaction;
      } catch (error) {
        console.error("Error in transaction query: ", error);
        throw new Error(error.message || "Error getting transaction");
      }
    },
  },
  Mutation: {
    createTransaction: async (_, { input }, context) => {
      try {
        const newTransaction = new Transaction({
          ...input,
          userId: context.getUser()._id,
        });
        await newTransaction.save();
        return newTransaction;
      } catch (error) {
        console.error("Error in creating transaction: ", error);
        throw new Error(error.message || "Error creating transaction");
      }
    },
    updateTransaction: async (_, { input }) => {
      try {
        const updatedTransaction = await Transaction.findByIdAndUpdate(
          input.transactionId,
          input,
          { new: true }
        );
        return updatedTransaction;
      } catch (error) {
        console.error("Error in updating transaction: ", error);
        throw new Error(error.message || "Error updating transaction");
      }
    },
    deleteTransaction: async (_, { transactionId }) => {
      try {
        const deletedTransaction = await Transaction.findByIdAndDelete(
          transactionId
        );
        return deletedTransaction;
      } catch (error) {
        console.error("Error in deleting transaction: ", error);
        throw new Error(error.message || "Error deleting transaction");
      }
    },
  },
  //TODO => ADD TRANSACTION/USER RELATION
};

export default transactionResolver;
