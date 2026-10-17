import { fireEvent, render, screen } from "@testing-library/react";
import Accommodation from "../Accommodation";

describe("Accommodation", () => {
  test("renders accommodation information", () => {
    render(<Accommodation />);

    expect(
      screen.getByText(
        /exclusively ours from the afternoon on Wednesday 28th July/,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/isn’t guaranteed until payment has been received/),
    ).toBeInTheDocument();
    expect(
      screen.getByText("A note about the night before"),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/you will need to stay at Rise Hall on Wednesday night/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Most rooms are £258 per night/),
    ).toBeInTheDocument();
  });

  test("renders FAQ sections", () => {
    render(<Accommodation />);

    expect(
      screen.getByText(
        "I only want to stay at Rise Hall on the night of the wedding - is that okay?",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("Nearby hotels")).toBeInTheDocument();
  });

  test("shows the night-before note as a heading before the FAQ drawers", () => {
    render(<Accommodation />);

    const noteHeading = screen.getByRole("heading", {
      name: "A note about the night before",
      level: 2,
    });
    const nightBeforeNote = screen.getByText(
      /We’re hosting a relaxed get-together at Rise Hall/,
    );
    const headings = [
      "How much are the rooms?",
      "I only want to stay at Rise Hall on the night of the wedding - is that okay?",
      "Nearby hotels",
    ];

    expect(
      noteHeading.compareDocumentPosition(screen.getByText(headings[0])),
    ).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    expect(nightBeforeNote.closest("details")).toBeNull();

    for (const heading of headings) {
      const summary = screen.getByText(heading);
      const drawer = summary.closest("details");

      expect(summary.tagName).toBe("SUMMARY");
      expect(drawer).not.toHaveAttribute("open");

      fireEvent.click(summary);

      expect(drawer).toHaveAttribute("open");
    }
  });

  test("renders nearby hotel information", () => {
    render(<Accommodation />);

    expect(
      screen.getByText(
        "You’re very welcome to arrange your own accommodation, or sleep in your own bed if you’re local.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: "Hotel" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", {
        name: "Approx. drive from Rise Hall",
      }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("columnheader", {
        name: "Estimated price per night",
      }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Beverley Guest House" }),
    ).toHaveAttribute(
      "href",
      "https://www.google.com/search?q=Beverley+Guest+House+Keldgate+booking",
    );
    expect(
      screen.getByRole("link", { name: "The Beverley Arms" }),
    ).toHaveAttribute("href", "https://www.beverleyarms.co.uk/");
    expect(screen.getByText("10–15 min")).toBeInTheDocument();
  });
});
