import { render, screen } from "@testing-library/react";
import FAQ from "../FAQ";

describe("FAQ", () => {
  test("renders each question as an accordion item", () => {
    render(<FAQ />);

    expect(screen.getByRole("heading", { name: "Frequently Asked Questions" })).toBeInTheDocument();
    expect(screen.getAllByRole("group")).toHaveLength(12);
    expect(screen.getByText("What should I wear?")).toBeInTheDocument();
    expect(screen.getByText("Is Rise Hall accessible?")).toBeInTheDocument();
  });

  test("renders the FAQ answers", () => {
    render(<FAQ />);

    expect(screen.getByText(/The dress code is formal/)).toBeInTheDocument();
    expect(screen.getByText(/The music will finish at 11.45pm/)).toBeInTheDocument();
    expect(screen.getByText(/The bar will accept card and contactless payments only/)).toBeInTheDocument();
  });
});