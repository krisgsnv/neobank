import { screen } from "@testing-library/react";
import Scoring from "./";
import { renderWithProvidersAndRouter } from "@/utils/testing";
import userEvent from "@testing-library/user-event";

test("Error message", async () => {
  renderWithProvidersAndRouter(<Scoring statusChangeHandler={() => {}} />, {
    preloadedState: {
      application: { step: 2 }
    }
  });

  await userEvent.click(screen.getByText(/continue/i));
  expect(
    screen.getByText(/incorrect date of passport issue date/i)
  ).toBeInTheDocument();
});

test("Input field", async () => {
  renderWithProvidersAndRouter(<Scoring statusChangeHandler={() => {}} />, {
    preloadedState: {
      application: { step: 2 }
    }
  });

  await userEvent.type(screen.getByPlaceholderText("YYYY-MM-DD"), "2000-10-10");
  expect(screen.getByPlaceholderText("YYYY-MM-DD")).toHaveValue("2000-10-10");
});

test("Input text into number field", async () => {
  renderWithProvidersAndRouter(<Scoring statusChangeHandler={() => {}} />, {
    preloadedState: {
      application: { step: 2 }
    }
  });

  await userEvent.type(screen.getByPlaceholderText("000000"), "1d4");
  expect(screen.getByPlaceholderText("000000")).toHaveValue("14");
});
