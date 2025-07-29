import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders navigation links", () => {
    render(<App />);

    expect(screen.getByText("Zoe & Ben")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Details")).toBeInTheDocument();
    expect(screen.getByText("The Venue")).toBeInTheDocument();
    expect(screen.getByText("Accommodation")).toBeInTheDocument();
  });

  test("shows active link styling", () => {
    render(<App />);

    const venueLink = screen.getByText("Home");
    expect(venueLink).toHaveClass("underline");
  });
});
