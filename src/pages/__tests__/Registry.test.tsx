import { render, screen } from "@testing-library/react";
import Registry from "../Registry";

describe("Registry", () => {
  test("renders the honeymoon contribution link", () => {
    render(<Registry />);

    expect(
      screen.getByText(
        "Please don’t feel as though you have to get us a gift. Your presence is enough!",
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "Contribute to our honeymoon" }),
    ).toHaveAttribute("href", "https://monzo.me/benpepers?h=vFGdDG");
  });
});
