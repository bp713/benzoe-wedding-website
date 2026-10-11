import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import RSVP from "../RSVP";

describe("RSVP", () => {
  const fetchMock = jest.fn();

  beforeEach(() => {
    fetchMock.mockReset();
    fetchMock
      .mockResolvedValueOnce({
        ok: true,
        json: async () => [
          { id: "9", names: ["Sarah Pepers", "Martin Pepers"], responses: {} },
        ],
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });
    global.fetch = fetchMock as unknown as typeof fetch;
  });

  test("submits all invitees' responses together to the local workbook API", async () => {
    render(<RSVP />);

    fireEvent.change(screen.getByLabelText("Search by name"), {
      target: { value: "Sarah Pepers" },
    });
    fireEvent.click(
      await screen.findByRole("button", {
        name: "Sarah Pepers & Martin Pepers",
      }),
    );
    screen
      .getAllByLabelText("No, I’m sorry I can’t make it")
      .forEach((answer) => fireEvent.click(answer));
    fireEvent.click(screen.getByRole("button", { name: "Submit RSVP" }));

    await waitFor(() => {
      expect(screen.getByRole("status")).toHaveTextContent(
        "Your RSVP has been saved. Thank you!",
      );
    });
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(JSON.parse(fetchMock.mock.calls[1][1].body)).toMatchObject({
      groupId: "9",
      responses: {
        "Sarah Pepers": { attending: "no" },
        "Martin Pepers": { attending: "no" },
      },
    });
  });
});
