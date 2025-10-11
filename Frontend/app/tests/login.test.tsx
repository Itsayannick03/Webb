import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Login } from "../login/login";

test("renders Login title, inputs, and button", () => {
  // RENDER the component
  render(<Login />);

  //  elements expected to see
  expect(screen.getByText("Login")).toBeInTheDocument();                 // title
  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();      // email input
  expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();   // password input
  expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument(); // button
});


//måste lägga till mer tester 