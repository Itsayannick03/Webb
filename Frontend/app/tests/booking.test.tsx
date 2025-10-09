import { render, screen } from "@testing-library/react";
import { Booking } from "../booking/booking"; // Adjust import path
import React from "react";
import "@testing-library/jest-dom";

test("renders the booking page with services", () => {
    render(<Booking />);
    
    // Check for main heading
    expect(screen.getByText("What do you want to do?")).toBeInTheDocument();
    
    // Check for all service buttons
    expect(screen.getByText("Haircut")).toBeInTheDocument();
    expect(screen.getByText("Color")).toBeInTheDocument();
    expect(screen.getByText("Styling")).toBeInTheDocument();
    
    // Check for confirm button
    expect(screen.getByText("Confirm")).toBeInTheDocument();
});