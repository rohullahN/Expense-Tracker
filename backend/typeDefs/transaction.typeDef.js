const transactionTypeDef = `#graphql
type Transaction{
  _id: ID!
  userId: ID!
  description: String!
  paymentType: String!
  category: String!
  amount: Float!
  location: String
  date: String!
}

type Query{
  transactions(orderBy: OrderByInput): [Transaction!]
  transaction(transactionId: ID!): Transaction
  categoryStatistics: [CategoryStatistics!]
}

type Mutation{
  createTransaction(input: CreateTransactionInput!): Transaction!
  updateTransaction(input: UpdateTransactionInput!): Transaction!
  deleteTransaction(transactionId: ID!): Transaction!
}

type CategoryStatistics {
  category: String!
  totalAmount: Float!
}

input OrderByInput{
  field: String!
  direction: String!
}

input CreateTransactionInput{
  description: String!
  paymentType: String!
  category: String!
  amount: Float!
  location: String
  date: String!
}

input UpdateTransactionInput{
  transactionId: ID!
  description: String
  paymentType: String
  category: String
  amount: Float
  location: String
  date: String
}

`;

export default transactionTypeDef;
