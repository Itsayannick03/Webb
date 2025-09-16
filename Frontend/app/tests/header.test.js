import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./Header";

describe("Header component", () => {
  test("renders the logo image", () => {
    render(<Header />);
    const logo = screen.getByAltText(/Mane Attraction text/i);
    expect(logo).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    render(<Header />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
    expect(screen.getByText(/Booking/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  test("renders menu icon", () => {
    render(<Header />);
    const menuIcon = screen.getByAltText(/menu/i);
    expect(menuIcon).toBeInTheDocument();
  });
});
