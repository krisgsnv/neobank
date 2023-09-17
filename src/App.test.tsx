import { screen } from "@testing-library/react";
import { App } from "./App";
import { renderWithProvidersAndRouter } from "./utils/testing";

test("Loan page", async () => {
  renderWithProvidersAndRouter(
    <App />,
    {
      preloadedState: {
        application: { step: 1, applicationId: 22 },
        prescoring: {
          offers: [],
          formData: {
            amount: 150000
          },
          step: 0,
          status: "success"
        }
      }
    },
    "/loan"
  );

  expect(screen.getByText(/step 1 of 5/i)).toBeInTheDocument();
});

test("Scoring page", async () => {
  renderWithProvidersAndRouter(
    <App />,
    {
      preloadedState: {
        application: { step: 2, applicationId: 22 }
      }
    },
    "/loan/22"
  );

  expect(screen.getByText(/step 2 of 5/i)).toBeInTheDocument();
});

test("Scoring page message", async () => {
  renderWithProvidersAndRouter(
    <App />,
    {
      preloadedState: {
        application: { step: 3, applicationId: 22 }
      }
    },
    "/loan/22"
  );

  expect(screen.getByText(/wait for a decision/i)).toBeInTheDocument();
});
