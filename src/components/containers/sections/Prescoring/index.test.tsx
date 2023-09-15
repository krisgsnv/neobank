import { screen } from "@testing-library/react";
import Prescoring from "./";
import { renderWithProviders } from "@/utils/testing";
import userEvent from "@testing-library/user-event";

test("Renders correct section", () => {
  renderWithProviders(<Prescoring />, {
    preloadedState: {
      prescoring: {
        formData: {
          amount: 150000
        },
        step: 0,
        status: "success"
      }
    }
  });
  expect(screen.getByText("Step 1 of 5")).toBeInTheDocument();
});

test("Error message", () => {
  renderWithProviders(<Prescoring />, {
    preloadedState: {
      prescoring: {
        step: 1,
        status: "error"
      }
    }
  });
  expect(screen.getByText(/there was an error/i)).toBeInTheDocument();
});

test("Loading status", () => {
  const { container } = renderWithProviders(<Prescoring />, {
    preloadedState: {
      prescoring: {
        step: 1,
        status: "loading"
      }
    }
  });
  expect(container.querySelector(".prescoring-loader")).toBeInTheDocument();
});

test("Step back in prescoring form", async () => {
  renderWithProviders(<Prescoring />, {
    preloadedState: {
      application: { step: 1 },
      prescoring: {
        offers: [],
        formData: {
          amount: 150000
        },
        step: 1,
        status: "success"
      }
    }
  });
  await userEvent.click(screen.getByTitle("Previous"));
  expect(screen.getByText("Step 1 of 5")).toBeInTheDocument();
});

test("Show final message", async () => {
  renderWithProviders(<Prescoring />, {
    preloadedState: {
      application: { step: 2 },
      prescoring: {
        offers: [],
        step: 2,
        status: "success"
      }
    }
  });
  expect(
    screen.getByText(/The preliminary decision has been sent/i)
  ).toBeInTheDocument();
});
