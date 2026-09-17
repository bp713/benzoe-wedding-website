import { render, screen } from "@testing-library/react";
import Accommodation from "../Accommodation";

describe("Accommodation", () => {
  test("renders accommodation information", () => {
    render(<Accommodation />);

    expect(screen.getByText("6 rooms at £135 + VAT")).toBeInTheDocument();
    expect(screen.getByText("20 rooms at £215 + VAT")).toBeInTheDocument();
    expect(
      screen.getByText("4 junior suites at £240+ VAT")
    ).toBeInTheDocument();
  });

  test("renders FAQ sections", () => {
    render(<Accommodation />);

    expect(
      screen.getByText(
        "I only want to stay at the venue the night of the wedding, is that okay?"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText("What if I don't want to stay at the venue?")
    ).toBeInTheDocument();
  });

  test("renders nearby hotel information", () => {
    render(<Accommodation />);

    expect(
      screen.getByText(
        "Premier Inn - Beverley Town Centre Hotel (18 minute drive)"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText("Premier Inn - Hull City Centre (24 minute drive)")
    ).toBeInTheDocument();
  });
});
