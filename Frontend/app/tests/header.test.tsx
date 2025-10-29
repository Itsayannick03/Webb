
import { render, screen } from "@testing-library/react";
import { Header } from "../components/header";
import React from "react";

import "@testing-library/jest-dom";

test("renders the Home test in the header", () => {
    render(< Header />);
    expect(screen.getByText("Home")).toBeInTheDocument();
});
