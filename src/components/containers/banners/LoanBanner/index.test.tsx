import { screen } from "@testing-library/react";
import LoanBanner from "./";
import { renderWithProvidersAndRouter } from "@/utils/testing";
import userEvent from "@testing-library/user-event";
import * as router from "react-router";

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
});

test("Button text", () => {
  renderWithProvidersAndRouter(<LoanBanner />, {
    preloadedState: {
      application: { step: 4 }
    }
  });

  expect(screen.getByText("Continue registration")).toBeInTheDocument();
});

test("Button as navigate", async () => {
  renderWithProvidersAndRouter(<LoanBanner />, {
    preloadedState: {
      application: { step: 4, applicationId: 12 }
    }
  });
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  await userEvent.click(button);
  expect(navigate).toHaveBeenCalledTimes(1);
  expect(navigate).toHaveBeenCalledWith("/loan/12/document");
});

test("Button as scroll to prescoring", async () => {
  renderWithProvidersAndRouter(<LoanBanner />);
  expect(screen.getByText("Apply for card")).toBeInTheDocument();
  await userEvent.click(screen.getByRole("button"));
  expect(navigate).toHaveBeenCalledTimes(0);
});
