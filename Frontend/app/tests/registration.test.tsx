import { render, screen } from "@testing-library/react";
import { Registration } from "../registration/registration"; // Adjust import path
import React from "react";

import "@testing-library/jest-dom";

test("renders the Registration form", () => {
    render(<Registration />);
    
    // Check for main heading
    expect(screen.getByText("Registration")).toBeInTheDocument();
    
    // Check for form fields
    expect(screen.getByPlaceholderText("Enter First Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter Last Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter Phone Number")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter Password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Repeat Password")).toBeInTheDocument();
    
    // Check for button
    expect(screen.getByRole("button", { name: "Register" })).toBeInTheDocument();
    
    // Check for sign in link
    expect(screen.getByText("Already have an account?")).toBeInTheDocument();
});