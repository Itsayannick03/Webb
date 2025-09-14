import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer } from "/home/yyannick/Webb/Frontend/app/footer.tsx";

describe("Footer", () => {
  test("renders the footer container", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo"); // <footer> has this role
    expect(footer).toBeInTheDocument();
  });

  test("renders two logos", () => {
    render(<Footer />);
    const logos = screen.getAllByAltText("Mane Attraction");
    expect(logos).toHaveLength(2);
  });

  test("renders contact information", () => {
    render(<Footer />);
    expect(screen.getByText("Exempelgatan 12")).toBeInTheDocument();
    expect(screen.getByText("123 45 Jönköping")).toBeInTheDocument();
    expect(screen.getByText("010-123 45 67")).toBeInTheDocument();
    expect(screen.getByText("kontakt@maneattraction.se")).toBeInTheDocument();
    expect(screen.getByText("Mån–Fre 09:00–18:00")).toBeInTheDocument();
  });
});
