import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import Header from "../Header";
import { LOGOUT } from "../../../graphql/mutations/user.mutation";
import {
  MemoryRouter,
  Route,
  Routes,
  createMemoryHistory,
} from "react-router-dom";
const mocks = [
  {
    request: {
      query: LOGOUT,
    },
    result: {
      data: {
        logout: true,
      },
    },
  },
];

test("renders the Header component without crashing", () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Header userName="John Doe" />
    </MockedProvider>
  );
});

test('renders the title "Expense Tracker"', () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Header userName="John Doe" />
    </MockedProvider>
  );
  const titleElement = screen.getByText(/Expense Tracker/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders the userName prop", () => {
  const userName = "John Doe";
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Header userName={userName} />
    </MockedProvider>
  );
  const userNameElement = screen.getByText(`Hello ${userName}!`);
  expect(userNameElement).toBeInTheDocument();
});

test("renders the logout icon", () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Header userName="John Doe" />
    </MockedProvider>
  );
  const logoutIcon = screen.getByTestId("logoutIcon");
  expect(logoutIcon).toBeInTheDocument();
});
